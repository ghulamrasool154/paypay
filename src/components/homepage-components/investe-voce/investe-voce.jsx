import React from "react";
import "./investe-voce.css";
import Image from "next/image";
import AbsDoubleButton from "@/components/abs-double-button/abs-double-button";
const InvesteVoce = () => {
  return (
    <section>
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row  investe_wrapper align-items-center">
            <div className="col-lg-6 left_voce_side">
              <h4 className="font-lato voce_heading">Com a paypay você</h4>
              <h2 className="lexend-deca-semibold  negocia_heading">
                Investe no crescimento do seu negócio
              </h2>
              <p className="font-lato voce_desp">
                Mantenha seu caixa saudável e invista no seu negócio, usando seu
                cartão de crédito. Sem a burocracia e altos custos dos
                empréstimos bancários, com condições justas e acessíveis.
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
            <div className="col-lg-6 right-voce-side text-end">
              <Image
                src={"/assets/images/homepage/blackman.png"}
                alt="blackman"
                width={559}
                height={456}
                className="img-fluid calling_image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvesteVoce;
