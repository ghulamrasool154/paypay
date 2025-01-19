import React from "react";
import Spinner from "../UI/spinner/spinner";

const PayingBills = () => {
  return (
    <div className="offcanvas-body align-items-center d-flex">
      <div className="loading_padding offcanvas-body">
        <div className="loading  d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
        <h4 className="font-lato text-center">
          Aguarde estamos realizando o pagamento dos seus boletos (transferência
          Pix).
        </h4>
        <p className="font-lato text-center">
          Em poucos instantes, seu pagamento será concluído.
        </p>
      </div>
    </div>
  );
};

export default PayingBills;
