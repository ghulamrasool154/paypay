import ButtonUI from "@/components/UI/button/button";
import React from "react";

const RightCheckout = ({ bills }) => {
  let totalValues = bills.reduce((total, currentValue, _, arr) => {
    return total + currentValue.value;
  }, 0);

  return (
    <div className="secti">
      <h2 className="title-summary font-lato fw-bold m-0 pb-3">Resumo</h2>
      <ul className="list-unstyled m-0 total-quties">
        <li className="d-flex justify-content-between align-items-center">
          <h2 className="font-lato m-0 fw-normal left-t text-capitalize">
            total
          </h2>
          <h2 className="font-lato m-0 fw-medium  left-r">
            {bills.length} boletos
          </h2>
        </li>
        <li className="d-flex justify-content-between align-items-center">
          <h2 className="font-lato m-0 fw-normal left-t text-capitalize">
            Valor total
          </h2>
          <h2 className="font-lato m-0 fw-bold left-r left-r-b">
            R$ {totalValues}
          </h2>
        </li>
      </ul>
      <ButtonUI variation="green" className="w-100">
        Escolher forma de pagamento
      </ButtonUI>
    </div>
  );
};

export default RightCheckout;
