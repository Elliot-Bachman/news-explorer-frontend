import React from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onRegisterClick, onSubmit }) {
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onRegisterClick();
  };

  return (
    <ModalWithForm
      title="Sign in"
      name="login"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Enter email"
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          required
        />
      </label>
      <div className="login-modal__footer">
        <p className="login-modal__text">
          or{" "}
          <button className="login-modal__link" onClick={handleRegisterClick}>
            Sign up
          </button>
        </p>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
