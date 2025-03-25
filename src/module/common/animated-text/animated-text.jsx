import React from "react";
import "./animated-text.css";

export default function AnimatedText({ text, type }) {
  let transformText;

  switch (type) {
    case "word":
      transformText = text.split(" ").map((word, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>
          {word}&nbsp;
        </span>
      ));
      break;
    case "character":
      transformText = text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.5}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ));
      break;
    default:
      transformText = text.split(" ");
      break;
  }

  return <div className="animated-text">{transformText}</div>;
}
