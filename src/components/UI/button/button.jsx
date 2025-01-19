import React from "react";
import "./button.css";
const ButtonUI = ({ className, children, variation, ...rest }) => {
  let classes = className ?? className;
  let variations = {
    outline: "outline",
    green: "green",
    disable: "disable",
    red: "red",
  };
  let selectVai = variations[variation] ? variations[variation] : "default";
  return (
    <button
      className={`btn-ui font-lato fw-semibold ${classes} ${selectVai}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonUI;
