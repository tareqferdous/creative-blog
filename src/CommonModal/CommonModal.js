<<<<<<< HEAD
import React from "react";
import "./CommonModal.css";

const CommonModal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-bg">
        <div className="overlay"></div>
        <div className="content">
            <div style={{marginBottom: '10px'}} className="wrap">
            <div className="post-title">
            <h3 style={{color: '#005f73'}}>Welcome To Our Site</h3>
            </div>
            <div className="icon">
            <i
                style={{ cursor: "pointer" }}
                onClick={close}
                class="fas fa-times"
            ></i>
            </div>
        </div>
        {children}
        </div>
    </div>
  );
};

export default CommonModal;
=======
import React from 'react';
import './CommonModal.css'

const CommonModal = ({isOpen, close, children}) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="content">
            <div className="wrap">
              <div className="post-title">
                <h3>Welcome to our site</h3>
              </div>
              <div className="icon">
                <i
                  style={{ cursor: "pointer" }}
                  onClick={close}
                  class="fas fa-times"
                ></i>
              </div>
            </div>
                {children}
            </div>
        </div>
    );
};

export default CommonModal;
>>>>>>> main
