import Image from "next/image";
import React from "react";
import "./rejected-payment.css";
const RejectedPayment = (props) => {
  const { onRetry } = props;
  return (
    <>
      <div className="offcanvas-header rejected_wrapper">
        <button
          type="button"
          className=" closed_button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <Image src={"/reject-accpeted/x.svg"} alt="" width={24} height={24} />
        </button>
      </div>
      <div className="offcanvas-body rejected-modal-wrapper align-items-center d-flex">
        <div className="rejected_modal">
          <Image
            src={"/reject-accpeted/alert-triangle.png"}
            alt=""
            width={42}
            height={42}
          />
          <h4 className="font-lato text-start">
            Não foi <br />
            possível
            <br /> realizar o <br />
            pagamento
          </h4>
          <button className="font-lato" onClick={onRetry}>
            Tentar novamente
          </button>
        </div>
      </div>
    </>
  );
};

export default RejectedPayment;
