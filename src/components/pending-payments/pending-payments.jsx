import React from "react";
import Spinner from "../UI/spinner/spinner";

const PendingPayments = () => {
  return (
    <div className="offcanvas-body align-items-center d-flex">
      <div className="loading_padding offcanvas-body">
        <div className="loading  d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
        <h4 className="font-lato text-center">
          Para sua segurança, você será direcionado ao banco emissor do seu
          cartão para confirmar o pagamento.
        </h4>
        <p className="font-lato text-center">
          O processo é rápido e, em breve, daremos continuidade ao seu
          pagamento.
        </p>
      </div>
    </div>
  );
};

export default PendingPayments;
