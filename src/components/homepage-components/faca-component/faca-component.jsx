"use client";
import React, { useState } from "react";
import "./faca-component.css";
import AbsDoubleButton from "@/components/abs-double-button/abs-double-button";
const FacaComponent = () => {
  const [value, setValue] = useState("1000");
  const handleRangeChange = (e) => {
    let inputValue = e.target.value;

    // Ensure input is not more than 100000
    if (inputValue > 100000) {
      inputValue = 100000;
    }

    setValue(inputValue);
  };

  return (
    <section className="faca_wrapper">
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row  main_row_faca">
            <div className="col-lg-6 col-md-12">
              <div className="faca_left_side">
                <h4 className="font-lexend-deca">
                  Faça uma <span> simulação </span>e veja como pagar com PayPay
                  vale a pena
                </h4>
                <h6 className="font-lato">Valor a pagar</h6>
                <div className="range_input">
                  <h4 className="font-lato">R$</h4>
                  <input
                    placeholder="1.000"
                    value={value}
                    onChange={handleRangeChange}
                    className="font-lato first_input"
                    min="1000"
                    max="100000"
                    type="number"
                  />
                  <div className="range_slider_wrapper">
                    <input
                      className="range"
                      type="range"
                      value={value}
                      min="1000"
                      max="100000"
                      onChange={handleRangeChange}
                      onMouseMove={handleRangeChange}
                    />
                  </div>
                  <div className="d-flex justify-content-between range_values">
                    <h5 className="font-lato">R$ 1.000,00</h5>
                    <h5 className="font-lato">R$ 100.000,00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faca_right_side">
                <div className="condic_wrapper">
                  <h4 className="font-lato">Condições de pagamento</h4>
                  <div>
                    <ul
                      className="nav nav-pills main_tab_wrapper_face"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item font-poppins" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          No App
                        </button>
                      </li>
                      <li className="nav-item font-poppins" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Na Web
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-content content_wrapper_faca"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex="0"
                  >
                    <div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 3x de</span> R$ 356,05
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.068,16
                        </p>
                      </div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 6x de</span> R$ 183,70
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.102,22
                        </p>
                      </div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 12x de</span> R$ 96,71
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.160,51
                        </p>
                      </div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 21x de</span> R$ 59,76
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.254,86
                        </p>
                      </div>

                      <p className="font-lato payment_desp">
                        Valores com base no uso de cartão bandeira Visa e
                        Mastercard, outras bandeiras podem ter valores
                        diferentes.
                      </p>
                      <div className="condico_button_wrapper d-flex justify-content-center w-100">
                        <AbsDoubleButton />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                    <div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 3x de</span> R$ 356,05
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.068,16
                        </p>
                      </div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 6x de</span> R$ 183,70
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.102,22
                        </p>
                      </div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 12x de</span> R$ 96,71
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.160,51
                        </p>
                      </div>
                      <div className="detail_cards for_magin_details_card">
                        <h5 className="m-0 font-lato">
                          <span> 21x de</span> R$ 59,76
                        </h5>
                        <p className="m-0 font-lato">
                          Valor total: R$ 1.254,86
                        </p>
                      </div>
                      <p className="font-lato payment_desp">
                        Valores com base no uso de cartão bandeira Visa e
                        Mastercard, outras bandeiras podem ter valores
                        diferentes.
                      </p>
                      <div className="condico_button_wrapper d-flex justify-content-center">
                        <AbsDoubleButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacaComponent;
