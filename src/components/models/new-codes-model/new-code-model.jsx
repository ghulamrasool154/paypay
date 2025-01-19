import React, { useState } from "react";
import ModelWrapper from "../components/model-wrapper/model-wrapper";
import ModelHeader from "../components/header/model-header";
import ModelFooter from "../components/footer/model-footer";
import ModelBody from "../components/model-body/model-body";

const NewCodeModel = () => {
  const [error, setError] = useState(false); // Default error as false
  const [textAreaValue, setTextAreaValue] = useState(""); // Track textarea value

  const handleTextAreaChange = (e) => {
    const value = e.target.value;
    setTextAreaValue(value);

    // Set error to true if length is below 50, otherwise set to false
    setError(value.length > 0 && value.length < 10);
  };

  return (
    <div
      className="modal fade"
      id="new-code-model"
      tabIndex="-1"
      aria-labelledby="new-code-model"
      aria-hidden="true"
    >
      <ModelWrapper>
        <ModelHeader />
        <ModelBody
          title="Adicionar novos boletos"
          src="/images/barcode_scanner.png"
        >
          <p className="font-lato fw-normal desc m-0 mb-3 text-start">
            Você pode adicionar quantos boletos quiser. Basta inserir a linha
            digitável de cada boleto e confirmar.
          </p>
          <textarea
            name="code"
            className={`input-ui textarea w-100 ${error ? "error-border" : ""}`}
            placeholder="Cole a linha digitável de um ou mais boletos"
            value={textAreaValue}
            onChange={handleTextAreaChange}
          ></textarea>
          {error && (
            <p className="text-start font-lato error-message mb-0">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span className="d-inline-block ms-1">
                Linha digitável inválida. Por favor, verifique!
              </span>
            </p>
          )}
        </ModelBody>
        <ModelFooter
          cancel="Cancelar"
          confirm="Confirmar"
          conTarget="#new-code-warning"
        />
      </ModelWrapper>
    </div>
  );
};

export default NewCodeModel;
