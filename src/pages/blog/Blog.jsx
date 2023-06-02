import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "../../store/blogData";
import "./blog.scss";

const Blog = ({ changeLang }) => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === Number(id));
  const [isPlaying, setIsPlaying] = useState(false);
  const speech = useRef(null);
  const pRef = useRef(null);
  const [isEnglish, setIsEnglish] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      console.log("play");
      speech.current = new SpeechSynthesisUtterance(pRef.current.textContent);
      speech.current.lang = "en-IN";
      window.speechSynthesis.speak(speech.current);
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (isPlaying) {
      console.log("stop");
      window.speechSynthesis.cancel();
      setIsPlaying(false);
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
      speech.current = null;
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="blog-container">
      <span>{!changeLang ? blog?.title : blog?.titleHin}</span>
      <div className="blog">
        <div className="btn-grp">
          <button onClick={handlePlay} disabled={isPlaying}>
            Play
          </button>
          <button onClick={handleStop} disabled={!isPlaying}>
            Stop
          </button>
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
