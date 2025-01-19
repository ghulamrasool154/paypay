import React from "react";

const ModelWrapper = ({ children }) => {
  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content model-content-custom">
          <div className="body text-center">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ModelWrapper;
