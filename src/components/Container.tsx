import React from "react";
import { ContainerProps } from "../types/modal";

const Container = ({
  title,
  description,
  closeModal,
  showModal,
}: ContainerProps) => {
  if (!showModal) return null;
  return (
    <div className="overlay" onClick={() => closeModal()}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="container-header">
          <h1>{title}</h1>
          <button onClick={() => closeModal()}>X</button>
        </div>
        <div className="container-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
