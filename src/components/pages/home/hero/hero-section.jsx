import React from "react";
import "./hero-section.css";
import ButtonUI from "@/components/UI/button/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  let buttons = [
    {
      title: "Baixar o App",
      link: "https://download.paypayhub.com",
    },
    {
      title: "Pague via web",
      link: "/pagamento",
    },
  ];
  return (
    <>
      <section className="hero-section">
        <div className="paypay-width pad-80">
          <div className="container-full">
            <div className="row m-0 align-items-center justify-content-between">
              <div className="col-12  col-lg-6">
                <div className="pay-hero-left w-100">
                  <h1 className="font-lexend-deca fw-semibold main-title m-0">
                    Libere o caixa da sua empresa
                  </h1>
                  <p className="font-lexend-deca fw-normal sub-title ">
                    Pague Pix e boletos em até 21x com as melhores taxas do
                    mercado
                  </p>
                  <ul className="hero-buttons w-100 list-unstyled m-0 d-flex flex-column flex-sm-row gap-2 gap-lg-3">
                    {buttons.map((button, index) => {
                      let outline = index === 1 ? "outline" : "";
                      return (
                        <li key={index} className="full-width">
                          <Link
                            href={button.link}
                            target={index !== 1 ? " _blank" : ""}
                            className="d-inline-block full-width"
                          >
                            <ButtonUI
                              variation={outline}
                              className="full-width"
                            >
                              {button.title}
                            </ButtonUI>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12  col-lg-6 text-center text-lg-end">
                <div className="hero-image overflow-hidden h-100 w-100 ">
                  <Image
                    src="/images/hero-image-02.png"
                    alt="demo"
                    width={600}
                    height={600}
                    className="h-100 object-fit-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-section-2">
        <div className="paypay-width pad-80 pad-tb-60">
          <div className="container-full">
            <div className="row m-0">
              <div className="col">
                <h2 className="font-lexend-deca fw-medium hero-2-title">
                  Rápido, seguro e sem burocracia
                </h2>
                <p className="font-lexend-deca fw-normal hero-2-sub-title m-0">
                  Tudo feito diretamente na PayPay, usando o seu{" "}
                  <span className="fw-bold">cartão de crédito</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
