"use client";
import ButtonUI from "@/components/UI/button/button";
import React, { useState } from "react";
import "./code-confirmation.css";
import InputUI from "@/components/UI/input/input";
import ModelHeader from "../components/header/model-header";
import ModelFooter from "../components/footer/model-footer";
import ModelWrapper from "../components/model-wrapper/model-wrapper";
import ModelBody from "../components/model-body/model-body";

const CodeConfirmationModel = () => {
  const [phoneNumber, setPhoneNumber] = useState("11 991****70");
  const [otpVerify, setOtpVerify] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [error, setError] = useState(false); // Set initial error state to true

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    const newOtp = { ...otpVerify, [`otp${index + 1}`]: value };

    if (/^[0-9]$/.test(value)) {
      setOtpVerify(newOtp);

      // Check if all inputs are filled to auto-remove error
      const allFilled = Object.values(newOtp).every((digit) => digit !== "");
      setError(!allFilled); // Set error to false only when all fields are filled

      if (index < 5 && value) {
        document.getElementById(`otp${index + 2}`).focus();
      }
    } else if (!value) {
      setOtpVerify(newOtp);
      setError(true); // Reset error to true if any field is cleared
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otpVerify[`otp${index + 1}`]) {
      document.getElementById(`otp${index}`).focus();
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="code-confirmation"
        tabIndex="-1"
        aria-labelledby="code-confirmationLabel"
        aria-hidden="true"
      >
        <ModelWrapper>
          <ModelHeader />
          <ModelBody title="Conecte seu celular" src="/images/whatsapp.png">
            <p className="font-lato fw-normal desc m-0">
              Insira o código que foi enviado por WhatsApp para {phoneNumber}
            </p>
            <ul className="list-unstyled m-0 my-3 list-of-numbers mx-auto">
              {/* <ul className="d-flex list-unstyled m-0 my-3 gap-1 gap-md-0 justify-content-between"> */}
              {[...Array(6)].map((_, index) => {
                return (
                  <li key={index} className={`${error && "error"} list-number`}>
                    <InputUI
                      key={index}
                      id={`otp${index + 1}`}
                      maxLength={1}
                      className={`h-100 text-center ${error ? "error" : ""}`}
                      placeholder="*"
                      type="text"
                      name={`otp${index + 1}`}
                      value={otpVerify[`otp${index + 1}`]}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    />
                  </li>
                );
              })}
            </ul>
            {error && (
              <h6 className="font-lato fw-bold error my-3">
                Código incorreto. Por favor, verifique!
              </h6>
            )}
            <h6
              className="font-lato fw-bold code-resend m-0 cursor-pointer d-inline-block"
              data-bs-target="#new-code-model"
              data-bs-toggle="modal"
            >
              Enviar novamente
            </h6>
          </ModelBody>
          <ModelFooter cancel="Cancelar" confirm="Validar" />
        </ModelWrapper>
      </div>
    </>
  );
};

export default CodeConfirmationModel;
