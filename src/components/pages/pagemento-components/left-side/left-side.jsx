import React from "react";
import "./left-side.css";
const PagementoLeftSide = ({ title, desc1, desc2 }) => {
  return (
    <div className="w-100 payment-left-side">
      <h2 className="font-lexend-deca fw-semibold payment-left-title m-0 mb-2 mb-md-4">
        {title}
      </h2>
      <p className="font-lato payment-left-pra fw-medium">{desc1}</p>
      <p className="font-lato payment-left-pra fw-medium m-0">{desc2}</p>
    </div>
  );
};

export default PagementoLeftSide;
