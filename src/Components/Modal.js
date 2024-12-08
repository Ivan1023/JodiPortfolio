import React, { useEffect, useState } from "react";
import "./ComponentCSS/Modal.scss";

// Modal Component
export const Modal = ({ isOpen, imageUrl, onClose }) => {
    const [dimensions, setDimensions] = useState({ width: "90vw", height: "auto" });

    useEffect(() => {
      if (isOpen && imageUrl) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          const { width, height } = img;
          if (width > height) {
            setDimensions({ width: "90vw", height: "auto" });
          } else {
            setDimensions({ width: "auto", height: "90vh" });
          }
        };
      }
    }, [isOpen, imageUrl]);
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content"
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <img src={imageUrl} alt="Full Size" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </div>
    );
};