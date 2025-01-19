import React from "react";
import "./comece-pagar.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ComecePagar = () => {
  const router = useRouter();
  return (
    <section className="comece_pagar_wraper">
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row m-0 comece_pagar_row_bg">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="comece_left_side">
                <h4 className="font-lexend-deca ">
                  Comece a pagar <br /> com PayPay
                </h4>
                <p className="font-lato">
                  Economize multas e juros, consiga descontos ao pagar <br />
                  fornecedores e invista no crescimento do seu negócio.
                </p>
                <button
                  className="font-lato comece_baixar_button"
                  onClick={() =>
                    window.open("https://download.paypayhub.com", "_blank")
                  }
                >
                  Baixar App
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="mobile_image_comece text-center">
                <Image
                  src={"/assets/images/homepage/mob1.png"}
                  alt=""
                  width={313}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComecePagar;
