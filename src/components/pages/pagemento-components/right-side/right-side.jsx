"use client";
import React from "react";
import "./right-side.css";
import SelectOption from "../select-option/select-option";

import Pixform from "../pix-form/boleto-form";
import Boletoform from "../boleto-form/boleto-form";
const PagementoRightSide = ({ type }) => {
  return (
    <div className="pagement-side-form ms-0 ms-lg-auto">
      <h2 className="font-lato m-0 mb-3 right-side-heading fw-medium">
        O que você deseja pagar?
      </h2>
      <SelectOption type={type} />
      {type === "pix" ? <Pixform /> : <Boletoform />}
    </div>
  );
};

export default PagementoRightSide;
