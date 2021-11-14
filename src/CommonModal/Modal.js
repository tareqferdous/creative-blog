import { useState } from "react";

const Modal = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
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