import React from 'react';
import './CommonModal.css'

const CommonModal = ({isOpen, close, children}) => {
    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="overlay"></div>
            <div className="content">
            <div className="wrap">
              <div className="post-title">
                <h3>Create A New Post</h3>
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