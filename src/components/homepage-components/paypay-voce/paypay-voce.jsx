import React from "react";
import "./paypay-voce.css";
import Image from "next/image";
import AbsDoubleButton from "@/components/abs-double-button/abs-double-button";
const PaypayVoce = () => {
  return (
    <>
      <section className="main_paypay_wrapper">
        <div className="paypay-width pad-custom-80">
          <div className="container-full">
            <div className="row  paypayvoce-wrapper align-items-center">
              <div className="col-lg-6 col-md-12  left_voce_side">
                <h4 className="font-lato voce_heading">Com a paypay você</h4>
                <h2 className="lexend-deca-semibold  negocia_heading">
                  Negocia melhor suas compras
                </h2>
                <p className="font-lato voce_desp">
                  Garanta descontos ao negociar pedidos maiores com pagamento à
                  vista com seus fornecedores, e pague parcelado na PayPay,
                  ajustando os prazos ao seu fluxo de caixa.
                </p>
                <div className="button_area">
                  {/* <button className="font-lato baixar-button">
                    Baixar o App
                  </button>
                  <button className="font-lato pague-button">
                    Pague via web
                  </button> */}
                  <AbsDoubleButton />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 right-voce-side text-end">
                <Image
                  src={"/assets/images/homepage/callgirl.png"}
                  alt="girl"
                  width={559}
                  height={456}
                  className="img-fluid calling_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaypayVoce;
