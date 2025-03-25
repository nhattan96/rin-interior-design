import React from "react";
import "./animated-text.css"; // Đừng quên import file CSS

export default function AnimatedText({ text }) {
  return (
    <div className="animated-text">
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
}
