import React from "react";
import "./input.css";
const InputUI = ({ className, ...rest }) => {
  let classes = className ?? className;
  return <input {...rest} className={"input-ui w-100 " + classes} />;
};

export default InputUI;
