import { useState } from "react";
import "./img-preview.css";

export default function ImagePreview({ imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="image-container">
      {/* Thumbnail */}
      <img
        src={imageUrl}
        alt="Preview"
        className="thumbnail"
        onClick={() => setIsOpen(true)}
      />

      {/* Popup */}
      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            {/* Full Image */}
            <img src={imageUrl} alt="Full Preview" className="full-image" />
          </div>
        </div>
      )}
    </div>
  );
}
