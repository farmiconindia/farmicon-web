import React, { useState, useEffect, useRef } from 'react';
import "./ai.scss";

const VoiceAssistant = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [recognition, setRecognition] = useState(null);
  const chatAreaRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Web Speech API is not supported by this browser.');
    } else {
      const speechRecognition = new webkitSpeechRecognition();
      speechRecognition.continuous = false;
      speechRecognition.interimResults = false;
      setRecognition(speechRecognition);

      speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log(`Transcript: ${transcript}`);
        speechRecognition.stop();
        appendUserMessage(transcript);
        // Calling askQuestion with the current selectedLanguage
        askQuestion(transcript, selectedLanguage);
      };

      speechRecognition.onerror = (event) => {
        console.error('Speech recognition error occurred: ' + event.error);
      };
    }
  }, [selectedLanguage]); // Update useEffect to run when selectedLanguage changes

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    console.log(`Language set to: ${language}`);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Language set to: ${language.charAt(0).toUpperCase() + language.slice(1)}`, type: 'assistant' }
    ]);
  };

  const appendUserMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: 'user' }
    ]);
    scrollToBottom();
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") {
      alert("Please enter a message.");
      return;
    }

    appendUserMessage(userInput);
    askQuestion(userInput, selectedLanguage); // Pass selectedLanguage here
    setUserInput('');
  };

  const startRecording = () => {
    if (recognition) {
      const languageCode = getLanguageCode(selectedLanguage);
      recognition.lang = languageCode;
      console.log(`Starting recording with language: ${languageCode}`);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Listening...', type: 'assistant' }
      ]);
      recognition.start();
    }
  };

  const askQuestion = (question, language) => {
    console.log(`Selected Language: ${language}`);
    const endpoint = `https://farmiconbot.onrender.com/${language}-assistant`;
    console.log(`Endpoint: ${endpoint}`);
    
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: question }),
    })
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Network response was not ok.');
      })
      .then(blob => {
        const audio = audioRef.current;
        audio.src = URL.createObjectURL(blob);
        audio.style.display = 'block';
      })
      .catch(error => console.error('Error:', error));
  };

  const scrollToBottom = () => {
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  };

  const getLanguageCode = (language) => {
    switch (language) {
      case 'hindi':
        return 'hi-IN';
      case 'marathi':
        return 'mr-IN';
      case 'gujarati':
        return 'gu-IN';
      case 'punjabi':
        return 'pa-IN';
      default:
        return 'en-US';
    }
  };

  return (
    <div className="container">
      <h1>Farmicon Bot</h1>
      <div id="languageButtons">
        {['english', 'hindi', 'marathi', 'gujarati', 'punjabi'].map((language) => (
          <button
            key={language}
            className={`language-btn ${selectedLanguage === language ? 'selected' : ''}`}
            onClick={() => handleLanguageChange(language)}
          >
            {language.charAt(0).toUpperCase() + language.slice(1)}
          </button>
        ))}
      </div>
      <div>
        <input
          type="text"
          id="text-input"
          placeholder="Enter your message"
          value={userInput}
          onChange={handleInputChange}
        />
        <button id="send-btn" onClick={handleSendMessage}>Send</button>
      </div>
      <button id="record-btn" onClick={startRecording}>Record</button>
      <div className="chat-area" id="chat-area" ref={chatAreaRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type === 'user' ? 'user-message' : 'assistant-message'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <audio id="response-audio" controls style={{ display: 'none' }} ref={audioRef}></audio>
    </div>
  );
};

export default VoiceAssistant;
