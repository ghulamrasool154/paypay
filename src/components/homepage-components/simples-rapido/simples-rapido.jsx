import React, { useState } from "react";
import "./simples-rapido.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SimplesRapido = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeSubTab, setActiveSubTab] = useState("subtab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSubTab("subtab1"); // Reset to first sub-tab on main tab change
  };

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
  };

  return (
    <section className="simples_rapido_main_wrapper">
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row  simples_wrapper align-items-start">
            <div className="col-lg-6 main_investe_wrapper_left">
              <h4 className="lexend-deca-normal simples_heading">
                <span>Simples e Rápido:</span> <br />
                Veja como a PayPay funciona
              </h4>

              <ul className="nav main_button_pagar_wrapper" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link font-poppins  first_tab offlinetabbutton pagar_button ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab1")}
                  >
                    Pagar no App
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link offlinetabbutton pagar_web_button font-poppins  ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tab2")}
                  >
                    Pagar na WEB
                  </button>
                </li>
              </ul>

              <div className="tabs_lower_content">
                {activeTab === "tab1" && (
                  <div className="nav flex-column">
                    <button
                      className={`nav-link d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab1" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab1")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope">1</p>
                      <h6 className="mb-0 tabs_content_heading text-start font-lato">
                        Cadastre-se na plataforma PayPay.
                      </h6>
                    </button>
                    <button
                      className={`nav-link  d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab2" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab2")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope">2</p>
                      <h6 className="mb-0 tabs_content_heading text-start font-lato">
                        Selecione as contas que deseja pagar.
                      </h6>
                    </button>
                    <button
                      className={`nav-link d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab3" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab3")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope">3</p>
                      <h6 className="mb-0 tabs_content_heading text-start font-lato">
                        Adicione um cartão de crédito com limite disponível.
                      </h6>
                    </button>
                    <button
                      className={`nav-link d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab4" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab4")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope">4</p>
                      <h6 className="mb-0 tabs_content_heading font-lato">
                        Escolha o número de parcelas.
                      </h6>
                    </button>
                    <button
                      className={`nav-link d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab5" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab5")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope">5</p>
                      <h6 className="mb-0 tabs_content_heading text-start font-lato">
                        Pronto, seu fornecedor recebeu a vista e você paga
                        parcelado.
                      </h6>
                    </button>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className="nav flex-column">
                    <button
                      className={`nav-link d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab1" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab1")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope">1</p>
                      <h6 className="mb-0 tabs_content_heading text-start font-lato">
                        Informe os dados para pagamento.
                      </h6>
                    </button>
                    <button
                      className={`nav-link text-start d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab2" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab2")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope">2</p>
                      <h6 className="mb-0 tabs_content_heading text-start font-lato">
                        Escolha a forma de pagamento e número de parcelas
                      </h6>
                    </button>
                    <button
                      className={`nav-link text-start d-flex align-items-center tabs_margin ${
                        activeSubTab === "subtab3" ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick("subtab3")}
                    >
                      <p className="mb-0 numbering_tabs font-manrope ">3</p>
                      <h6 className="mb-0 tabs_content_heading text-start font-lato">
                        Pronto, seu fornecedor recebeu à vista e você paga
                        parcelado.
                      </h6>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              {activeTab === "tab1" && (
                <>
                  <div
                    className={
                      activeSubTab === "subtab5"
                        ? "right_investo_bg_black"
                        : "right_investe_wrapper_bg 222"
                    }
                  >
                    <div className="text-center image_padding">
                      {activeSubTab === "subtab1" && (
                        <Image
                          src="/assets/images/homepage/mobile1.png"
                          alt="Image 1"
                          width={248}
                          height={538}
                        />
                      )}
                    </div>

                    <div className="text-center ">
                      {activeSubTab === "subtab2" && (
                        <Image
                          src="/assets/images/homepage/mobile2.png"
                          alt="Image 2"
                          width={248}
                          height={538}
                        />
                      )}
                    </div>
                    <div className="text-center ">
                      {activeSubTab === "subtab3" && (
                        <Image
                          src="/assets/images/homepage/mobile3.png"
                          alt="Image 3"
                          width={248}
                          height={538}
                        />
                      )}
                    </div>
                    <div className="text-center ">
                      {activeSubTab === "subtab4" && (
                        <Image
                          src="/assets/images/homepage/mobile4.png"
                          alt="Image 4"
                          width={248}
                          height={538}
                        />
                      )}
                    </div>
                    <div className="text-center ">
                      {activeSubTab === "subtab5" && (
                        <Image
                          src="/assets/images/homepage/mobile5.png"
                          alt="Image 5"
                          width={248}
                          height={538}
                        />
                      )}
                    </div>
                    {activeSubTab === "subtab5" ? (
                      <div className="buttons_wrapper_right_one justify-content-center d-flex">
                        <button
                          className="font-lato  right_bar_button_baxior bg_black_button"
                          onClick={() =>
                            window.open(
                              "https://download.paypayhub.com",
                              "_blank"
                            )
                          }
                        >
                          Baixar o App
                        </button>
                        <button
                          className="font-lato  right_bar_button_pague bg_black_button_2"
                          onClick={() => router.push("pagamento")}
                        >
                          Pague via web
                        </button>
                      </div>
                    ) : (
                      <div className="buttons_wrapper_right_one justify-content-center d-flex">
                        <button
                          className="font-lato  right_bar_button_baxior"
                          onClick={() =>
                            window.open(
                              "https://download.paypayhub.com",
                              "_blank"
                            )
                          }
                        >
                          Baixar o App
                        </button>
                        <button
                          className="font-lato  right_bar_button_pague"
                          onClick={() => router.push("pagamento")}
                        >
                          Pague via web
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
              {activeTab === "tab2" && (
                <>
                  <div className="bg_web_tab">
                    {activeSubTab === "subtab1" && (
                      <div className="text-center image_padding">
                        <Image
                          src="/assets/images/homepage/second1.png"
                          alt="Image"
                          width={512}
                          height={307}
                          className="img-fluid"
                        />
                      </div>
                    )}
                    {activeSubTab === "subtab2" && (
                      <div className="text-center image_padding">
                        <Image
                          src="/assets/images/homepage/second2.png"
                          alt="Image"
                          width={512}
                          height={307}
                          className="img-fluid"
                        />
                      </div>
                    )}
                    {activeSubTab === "subtab3" && (
                      <div className="text-center image_padding">
                        <Image
                          src="/assets/images/homepage/second3.png"
                          alt="Image"
                          width={512}
                          height={307}
                          className="img-fluid"
                        />
                      </div>
                    )}
                    <div className="buttons_wrapper_right_second justify-content-center d-flex">
                      <button
                        className="font-lato  right_bar_button_baxior"
                        onClick={() =>
                          window.open(
                            "https://download.paypayhub.com",
                            "_blank"
                          )
                        }
                      >
                        Baixar o App
                      </button>
                      <button
                        className="font-lato  right_bar_button_pague"
                        onClick={() => router.push("pagamento")}
                      >
                        Pague via web
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplesRapido;
