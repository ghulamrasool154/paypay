import React from "react";
import "./label.css";

const Label = ({ className, children, ...rest }) => {
  let classes = className ?? className;

  return (
    <label
      {...rest}
      className={`label-ui mb-1 font-lato fw-semibold ${classes}`}
    >
      {children}
    </label>
  );
};

export default Label;
