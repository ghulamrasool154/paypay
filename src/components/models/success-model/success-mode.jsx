import React from "react";
import "./success.css";
import ModelWrapper from "../components/model-wrapper/model-wrapper";
import ModelHeader from "../components/header/model-header";
import ModelBody from "../components/model-body/model-body";
import ModelFooter from "../components/footer/model-footer";
const SuccessModel = () => {
  return (
    <>
      <div
        className="modal fade success-model"
        id="success-model"
        tabIndex="-1"
        aria-labelledby="new-code-model"
        aria-hidden="true"
      >
        <ModelWrapper>
          <ModelHeader />
          <ModelBody
            title="O boleto adicionado já foi pago."
            src="/images/success.png"
          ></ModelBody>
          <ModelFooter confirm={"Confirmar"} conTarget="#bill-model" />
        </ModelWrapper>
      </div>
    </>
  );
};

export default SuccessModel;
