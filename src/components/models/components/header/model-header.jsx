import Image from "next/image";
import React from "react";

const ModelHeader = () => {
  return (
    <>
      <header className="d-flex justify-content-end align-items-center">
        <button
          className="cursor-pointer rounded-circle close-btn d-flex justify-content-center align-items-center"
          data-bs-dismiss="modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </header>
    </>
  );
};

export default ModelHeader;
