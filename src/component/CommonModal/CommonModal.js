import React from "react";
import UserContext from "../../UserContext";
import "./CommonModal.css";
import Modal from "./Modal";

const CommonModal = ({ children }) => {
  // const { openModal, handleCloseModal } = Modal();
  const {modal} = React.useContext(UserContext);
  const [openModal, toggleModal] = modal;

  return (
    <>
      {openModal && 
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
                  onClick={toggleModal}
                  // onClick={handleCloseModal}
                  class="fas fa-times"
                ></i>
              </div>
            </div>
            {children}
          </div>
        </div>
      }
    </>
  );
};

export default CommonModal;
