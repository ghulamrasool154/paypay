import React, { useState } from "react";
import ButtonUI from "@/components/UI/button/button";

const ModelFooter = ({ cancel, confirm, conTarget }) => {
  //  this is the rough code used to show demo of offcanvas and modal
  // plese remove this code and use modal and offcavass dynamically according to server response
  const handleOpenOffcanvas = () => {
  
    var modals = document.getElementById("code-confirmation");
    modals.classList.remove("show");
    modals.classList.add("hide");

    var backdrop = document.getElementsByClassName("modal-backdrop");
    backdrop[0].classList.remove("show");
    backdrop[0].classList.add("hide");
    // document.getElementById("card-Number").focus();
    // focus on input 
  };

  return (
    <footer className="d-flex gap-3 justify-content-center">
      {cancel && <ButtonUI variation="disable">{cancel}</ButtonUI>}

      {/* Button to open Offcanvas */}
      {confirm === "Validar" ? (
        <ButtonUI
          variation="green"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          onClick={handleOpenOffcanvas} // Close modal when offcanvas opens
        >
          {confirm}
        </ButtonUI>
      ) : (
        <ButtonUI
          data-bs-dismiss="modal"
          variation="green"
          data-bs-toggle="modal"
          data-bs-target={conTarget && conTarget}
        >
          {confirm}
        </ButtonUI>
      )}
    </footer>
  );
};

export default ModelFooter;
