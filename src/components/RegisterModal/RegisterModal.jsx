import React from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onLoginClick, onSubmit }) {
  const handleLoginClick = (e) => {
    e.preventDefault();
    onLoginClick();
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      buttonText="Sign up"
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
      <label className="modal__label">
        Username
        <input
          type="text"
          name="username"
          className="modal__input"
          placeholder="Enter username"
          required
        />
      </label>
      <div className="register-modal__footer">
        <p className="register-modal__text">
          Already have an account?{" "}
          <button className="register-modal__link" onClick={handleLoginClick}>
            Sign in
          </button>
        </p>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
