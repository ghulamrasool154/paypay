import React from "react";
import PagementoLeftSide from "../pagemento-components/left-side/left-side";
import PagementoRightSide from "../pagemento-components/right-side/right-side";

const PagementoBoleto = () => {
  return (
    <div className="paymento-page">
      <section className="payment-section paypay-width pad-80 pad-tb-160">
        <div className="container-full">
          <div className="row m-0 ">
            <div className="col-12 col-md-6">
              <PagementoLeftSide
                title="Saiba como funciona o boleto parcelado"
                desc1="O boleto será pago imediatamente e o valor será cobrado na fatura do seu cartão de crédito"
                desc2="Você poderá verificar o valor total e condições de pagamento, antes de confirmar o pagamento."
              />
            </div>
            <div className="col-12 col-md-6">
              <PagementoRightSide type="boleto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagementoBoleto;
