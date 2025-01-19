import React from "react";
import "./checkbox-input.css";
const CheckBoxInput = ({ className, ...rest }) => {
  let classes = className ?? className;
  return <input className={`checkbox ${classes}`} {...rest}></input>;
};

export default CheckBoxInput;
