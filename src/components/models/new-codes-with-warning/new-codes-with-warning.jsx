import React from "react";
import ModelWrapper from "../components/model-wrapper/model-wrapper";
import ModelHeader from "../components/header/model-header";
import ModelBody from "../components/model-body/model-body";
import ModelFooter from "../components/footer/model-footer";
import "./new-code-warning.css";
const NewCodesWithWarning = () => {
  return (
    <>
      <div
        className="modal fade"
        id="new-code-warning"
        tabIndex="-1"
        aria-labelledby="new-code-warning"
        aria-hidden="true"
      >
        <ModelWrapper>
          <ModelHeader />
          <ModelBody
            title="Não foi possível adicionar os boletos abaixo"
            src="/images/alert.png"
            icontype="alert"
          >
            <p className="font-lato m-0 fw-normal body-para">
              <span className="fw-bold"> 3 boletos </span> que você tentou
              adicionar
              <span className="fw-bold">
                &nbsp;não puderam ser adicionados ao pagamento
              </span>
              . A linha digitável pode estar inválida ou o boleto já foi pago.
            </p>
            <div className="w-100 table-wrapp mt-3">
              <div className="h-head d-flex justify-content-between align-items-center">
                <h2 className="font-lato fw-semibold m-0 w-70">Beneficiário</h2>
                <h2 className="font-lato fw-semibold m-0 w-30 lefft w-100 text-start">
                  Motivo
                </h2>
              </div>
              <ul className="h-body list-unstyled m-0 ">
                <li className="d-flex justify-content-between align-items-center">
                  <h6 className="b-title font-lato m-0 fw-medium text-start w-70">
                    03399.12345 67890.123456 78901.234567 8 1234567890123
                  </h6>
                  <h6 className="w-100  w-30">
                    <p className="status text-start m-0 font-lato fw-medium">
                      <span className="invalid d-inline-block"></span>
                      <span className="txt-heading">Inválido</span>
                    </p>
                  </h6>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <h6 className="b-title font-lato m-0 fw-medium text-start w-70">
                    03399.12345 67890.123456 78901.234567 8 1234567890123
                  </h6>
                  <h6 className="w-100  w-30">
                    <p className="status text-start m-0 font-lato fw-medium">
                      <span className="success d-inline-block"></span>
                      <span className="txt-heading">Pago</span>
                    </p>
                  </h6>
                </li>
              </ul>
            </div>
          </ModelBody>
          <ModelFooter confirm={"Confirmar"} conTarget="#success-model" />
        </ModelWrapper>
      </div>
    </>
  );
};

export default NewCodesWithWarning;
