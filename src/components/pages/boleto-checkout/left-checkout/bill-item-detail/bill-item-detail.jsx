import React from "react";

const Title = ({ children }) => {
  return <h2 className="m-0 font-lato fw-normal title">{children}</h2>;
};
const Description = ({ children, className }) => {
  let classes = className ?? className;
  return (
    <h6 className={`m-0 mt-2 font-lato fw-normal desc ${classes}`}>
      {children}
    </h6>
  );
};
const BillItemDetail = ({ element }) => {
  return (
    <li className="bil-list pt-3 pb-3">
      <h2 className="bil-title fw-bold font-lato  m-0">Beneficiário</h2>
      <p className="bil-title fw-normal font-lato   mt-2 mb-3">
        {element.beneficiaryIdentity}
      </p>

      <h2 className="bil-title fw-bold font-lato  m-0">Linha digitável</h2>
      <p className="bil-title fw-normal font-lato  mt-2 mb-3">
        {element.digitableLine}
      </p>

      <div className="detail-item">
        <div className="grid-column">
          <Title>Valor original</Title>
          <Description>R$ {element.originalValue}</Description>
        </div>
        <div className="grid-column">
          <Title>Juros</Title>
          <Description className="red-color">
            + R$ {element.fineValue}
          </Description>
        </div>
        <div className="grid-column">
          <Title>Multa</Title>
          <Description className="red-color">
            + R$ {element.interestValue}.00
          </Description>
        </div>
        <div className="grid-column">
          <Title>Desconto</Title>
          <Description className="green-color">
            - R$ {element.discountValue}.00
          </Description>
        </div>
        <div className="grid-column">
          <Title>Valor a pagar</Title>
          <Description className="fw-bold">R${element.value} </Description>
        </div>
      </div>
    </li>
  );
};

export default BillItemDetail;
