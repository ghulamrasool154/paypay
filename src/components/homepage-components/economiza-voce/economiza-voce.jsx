import React from "react";
import "./economiza-voce.css";
import Image from "next/image";
import AbsDoubleButton from "@/components/abs-double-button/abs-double-button";

const EconomizaVoce = () => {
  return (
    <section>
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row  economiza_wrapper econo_wrap_2 align-items-center">
            <div className="col-lg-6 col-md-12 right-voce-side text-start">
              <Image
                src={"/assets/images/homepage/two-girls.png"}
                alt="girl"
                width={559}
                height={456}
                className="img-fluid calling_image"
              />
            </div>
            <div className="col-lg-6 col-md-12 left_voce_side econmiza_resp">
              <h4 className="font-lato voce_heading">Com a paypay você</h4>
              <h2 className="lexend-deca-semibold  negocia_heading">
                Economiza multas e juros
              </h2>
              <p className="font-lato voce_desp">
                Receba lembretes de vencimento para evitar atrasos e, se o caixa
                estiver apertado, pague suas contas com seu cartão pela PayPay,
                com custos menores que as taxas dos fornecedores.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomizaVoce;
