import React from "react";
import "./error.css";
import ModelWrapper from "../components/model-wrapper/model-wrapper";
import ModelHeader from "../components/header/model-header";
import ModelBody from "../components/model-body/model-body";
import ModelFooter from "../components/footer/model-footer";
const ErrorModel = () => {
  return (
    <div
      className="modal fade error-model"
      id="error-model"
      tabIndex="-1"
      aria-labelledby="new-code-model"
      aria-hidden="true"
    >
      <ModelWrapper>
        <ModelHeader />
        <ModelBody
          title="Mensagem de erro"
          src="/images/alert.png"
          icontype="alert"
        ></ModelBody>
        <ModelFooter confirm={"Confirmar"} />
      </ModelWrapper>
    </div>
  );
};

export default ErrorModel;
