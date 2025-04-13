import React from "react";
import "./MobileModal.css";

function MobileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Handle clicking on the overlay to close the modal
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("mobile-modal")) {
      onClose();
    }
  };

  return (
    <div
      className="mobile-modal mobile-modal_opened"
      onClick={handleOverlayClick}
    >
      {/* The modal content is not darkened - it maintains its solid #1A1B22 color */}
      <div className="mobile-modal__content">
        {/* Content will be added in future steps */}
      </div>
    </div>
  );
}

export default MobileModal;
