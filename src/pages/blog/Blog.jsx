import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "../../store/blogData";
import "./blog.scss";

const Blog = ({ changeLang }) => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === Number(id));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const speech = useRef(null);
  const pRef = useRef(null);

  const handleTogglePlay = () => {
    if (!isPlaying || isPaused) {
      let textToSpeak = changeLang ? blog?.descriptionHin : blog?.description;
      if (!textToSpeak) {
        // If there's no text for the selected language, use the default language
        textToSpeak = blog?.description;
      }
      if (!speech.current) {
        speech.current = new SpeechSynthesisUtterance(textToSpeak);
        speech.current.lang = changeLang ? 'hi-IN' : 'en-IN'; // Hindi: hi-IN, English: en-US
        speech.current.onend = () => {
          setIsPlaying(false);
        };
        setIsPlaying(true);
        window.speechSynthesis.speak(speech.current);
      } else if (isPaused) {
        setIsPaused(false);
        window.speechSynthesis.resume();
        setIsPlaying(true);
      }
    } else {
      setIsPaused(true);
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (isPlaying || isPaused) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      speech.current = null;
    }
  };

  speech.current &&
    (speech.current.onboundary = (event) => {
      const charIndex = event.charIndex;
      const pText = pRef.current.textContent;

      // Find the start and end indices of the current word being spoken
      let startIndex = charIndex;
      let endIndex = charIndex;
      while (startIndex > 0 && !/\s/.test(pText.charAt(startIndex - 1))) {
        startIndex--;
      }
      while (endIndex < pText.length && !/\s/.test(pText.charAt(endIndex))) {
        endIndex++;
      }

      // Highlight the current word being spoken
      pRef.current.innerHTML =
        pText.substring(0, startIndex) +
        `<p style="background-color: yellow; display:inline;font-weight:500; text-align:justify">${pText.substring(
          startIndex,
          endIndex
        )}</p>` +
        pText.substring(endIndex, pText.length);
    });

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      speech.current = null;
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Stop speech synthesis when language is changed
    handleStop();
  }, [changeLang]);

  return (
    <div className="blog-container">
      <span>{!changeLang ? blog?.title : blog?.titleHin}</span>
      <div className="blog">
        <div className="btn-grp">
          <button onClick={handleTogglePlay}>
            {isPlaying && !isPaused ? "Pause" : "Play"}
          </button>
          <button onClick={handleStop}>Stop</button>
        </div>
        <div className="desc" ref={pRef}>
          {!changeLang ? (
            <p>{blog?.description}</p>
          ) : (
            <p>{blog?.descriptionHin}</p>
          )}
          <div className="blog-more">
            <span>{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
