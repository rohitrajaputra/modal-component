import React, { useState } from "react";
import Container from "./Container";
import "./modal.style.css";
import { createPortal } from "react-dom";

const Modal = ({
  title = "Your Title Here",
  description = "Your Description Here",
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="modal">
      <button onClick={openModal}>Show Modal</button>
      {isModalOpen &&
        createPortal(
          <Container
            showModal={isModalOpen}
            title={title}
            description={description}
            closeModal={closeModal}
          />,
          document.getElementById("modal") as HTMLElement
        )}
    </div>
  );
};

export default Modal;
