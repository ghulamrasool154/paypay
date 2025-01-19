import React from "react";
import "./bill-model-exclude.css";
import ModelWrapper from "../components/model-wrapper/model-wrapper";
import ModelHeader from "../components/header/model-header";
import ModelBody from "../components/model-body/model-body";
import ModelFooter from "../components/footer/model-footer";
import ButtonUI from "@/components/UI/button/button";
import Image from "next/image";
const BillModelExclueModel = () => {
  return (
    <div
      className="modal fade bill-model"
      id="bill-model"
      tabIndex="-1"
      aria-labelledby="bill-model"
      aria-hidden="true"
    >
      <ModelWrapper>
        <ModelHeader />
        <ModelBody
          title="Tem certeza que você deseja excluir este boleto?"
          src="/images/delete.png"
          icontype="alert"
        >
          <p className="body-para font-lato fw-normal text-start m-0">
            Essa ação não poderá ser desfeita e o boleto será removido da sua
            lista de pagamentos.
          </p>

          <ul className="mt-3">
            <li className="body-para font-lato fw-normal text-start">
              Luz e Energia SA - <strong> R$ 350,75</strong>
            </li>
          </ul>
          <p className="body-para font-lato fw-normal text-start m-0">
            Caso ainda precise pagar este boleto, você poderá adicioná-lo
            novamente.{" "}
          </p>
        </ModelBody>
        <footer className="d-flex gap-3 justify-content-center">
          <ButtonUI variation="disable">Cancelar</ButtonUI>
          <ButtonUI
            data-bs-dismiss="modal"
            variation="red"
            data-bs-toggle="modal"
            data-bs-target="#error-model"
          >
            <Image
              width={20}
              height={20}
              className="d-inline-block talsh"
              src="/images/trash-2.svg"
              alt="trash"
            />
            Excluir
          </ButtonUI>
        </footer>
      </ModelWrapper>
    </div>
  );
};

export default BillModelExclueModel;
