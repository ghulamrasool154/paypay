import React from "react";
import "./footer.css";
import Link from "next/link";
import Image from "next/image";

import ButtonUI from "@/components/UI/button/button";
import FooterSubHead from "@/components/footer/sub-head/sub-head";
import Item from "@/components/footer/item/item";
const Footer = () => {
  let links = [
    {
      title: "Pagar via WEB",
      link: "/pagamento",
    },
    {
      title: "Simulador",
      link: "/simulador",
    },
    {
      title: "Central de ajuda",
      link: "/ajuda",
    },
    {
      title: "Termos de Uso",
      link: "/termos",
    },
    {
      title: "Política de Privacidade",
      link: "/politica-privacidade",
    },
  ];

  let socialLinks = [
    {
      name: "linkedin",
      icon: "/images/socials/linkedin.png",
      link: "https://www.linkedin.com/company/paypayhub",
    },
    {
      name: "instagram",
      icon: "/images/socials/instagram.png",
      link: "https://instagram.com/paguecompaypay",
    },
  ];
  return (
    <footer className="main-footer">
      <div className="paypay-width main-foot-wrap pad-80">
        <div className="container-full">
          <div className="row m-0">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul className="list-unstyled m-0 d-flex flex-column footer-logo">
                <li>
                  <Link href="/" className="d-inline-block" target="_blank">
                    <Image
                      src="/images/logo-white.svg"
                      alt="demo"
                      width={100}
                      height={50}
                      className="paypay-logo"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://download.paypayhub.com"
                    className="d-inline-block"
                    target="_blank"
                  >
                    <ButtonUI variation={"green"}>Baixar aplicativo</ButtonUI>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <FooterSubHead>Acesso fácil</FooterSubHead>
              <ul className="list-unstyled m-0">
                {links.map((link, index) => {
                  return <Item link={link} key={index} />;
                })}
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-4 mt-0 mt-lg-0">
              <FooterSubHead>Fale conosco</FooterSubHead>
              <ul className="list-unstyled fal-links m-0">
                <li className="d-flex">
                  <span className="foot-icon d-inline-block">
                    <Image
                      src={"/images/socials/whats-app.png"}
                      width={40}
                      height={40}
                      alt="whatsapp"
                    />
                  </span>
                  <p className="foo-item d-inline-block m-0 font-poppins fw-normal text-decoration-none">
                    WhatsApp: +55 (48) 3199-1606 <br /> ou &nbsp;
                    <Link
                      className="fw-bold text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://suporte.paypayhub.com"
                    >
                      clique aqui
                    </Link>
                    &nbsp; para ser direcionado
                  </p>
                </li>
                <li className="d-flex align-items-center">
                  <span className="foot-icon d-inline-block">
                    <Image
                      src={"/images/socials/envelope.png"}
                      width={40}
                      height={40}
                      alt="whatsapp"
                    />
                  </span>
                  <Link
                    href="mailto:contato@paypayhub.com"
                    className="foo-item d-inline-block m-0 font-poppins fw-normal text-decoration-none"
                  >
                    contato@paypayhub.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12  mt-md-4 mt-0 mt-lg-0">
              <FooterSubHead>Siga a PayPay</FooterSubHead>
              <ul className="list-unstyled d-flex m-0 ">
                {socialLinks.map((social, index) => {
                  return (
                    <li className="socil-item" key={index}>
                      <Link
                        href={social.link}
                        className="d-flex justify-content-center align-items-center text-decoration-none"
                        title={social.name}
                        target="_blank"
                      >
                        <Image
                          src={social.icon}
                          width={40}
                          height={40}
                          alt="whatsapp"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row m-0">
            <div className="col">
              <p className="font-lato fw-normal text-center m-0 copyright">
                A PayPay Hub é uma plataforma digital que atua como
                correspondente bancário do Banco Arbi (CNPJ/MF
                54.403.563/0001-50). Como correspondente bancário, seguimos as
                diretrizes do Banco Central do Brasil, nos termos da Resolução
                nº. 3.954, de 24 de fevereiro de 2011.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
