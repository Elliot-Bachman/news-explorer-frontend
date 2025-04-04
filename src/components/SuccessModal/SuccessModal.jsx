import React from "react";
import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignInClick }) {
  if (!isOpen) return null;

  return (
    <div className="success-modal">
      <div className="success-modal__container">
        <button
          type="button"
          className="success-modal__close-button"
          onClick={onClose}
        ></button>
        <h2 className="success-modal__title">
          Registration successfully {"\n"}completed!
        </h2>
        <button className="success-modal__sign-in" onClick={onSignInClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
