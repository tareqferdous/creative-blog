import { useState } from "react";

const Modal = () => {
    const [openModal, setOpenModal] = useState();

    const handleOpenModal = () => {
        setOpenModal(true);
        console.log('working')
    }

     const handleCloseModal = () => {
        setOpenModal(false);
    }

    return {
        openModal,
        handleOpenModal,
        handleCloseModal,
    }
};

export default Modal;