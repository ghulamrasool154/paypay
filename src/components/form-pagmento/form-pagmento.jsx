import React, { useState , useEffect} from "react";
import "./form-pagmento.css";
import Loading from "@/app/loading";
import Spinner from "../UI/spinner/spinner";
import Image from "next/image";
const FormPagmento = (props) => {
  const { onSubmit } = props;
  const [formData, setFormData] = useState({
    cardNumber: "1234 1234 1234 1234",
    dueDate: "12/25",
    cvv: 123,
    numOfInstallemts: 3,
    cardHolderName: "",
    confirmCpf: "123.123.123-60",
    pocket: "12340-123",
    number: 1234,
  });

  const [changeForm, setChangeForm] = useState(false);
  const _handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = () => {
    console.log(formData, "formDATA");
    setChangeForm(!changeForm);
    console.log(changeForm, "changeForms");
  };
  return (
    <>
      <>
        <div className="offcanvas-header forma_de_wrapper">
          <button
            type="button"
            className=" closed_button_forma"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <Image
              src={"/reject-accpeted/x.svg"}
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="offcanvas-body body_section ">
          <div className="forma_de_pagamento">
            <div className="pagando_wrapper_main">
              <div className="pagando_wrapper">
                <h4 className="font-lato ">Pagando</h4>
                <h2 className="font-lato">R$ 100,00</h2>
                <div className="d-flex align-items-center banco">
                  <h5 className="font-lato">Banco:</h5>
                  <p className="font-lato">Itaú</p>
                </div>
                <div className="d-flex align-items-center agencia_conta">
                  <div className="d-flex align-items-center agencia">
                    <h5 className="font-lato ">Agência: </h5>
                    <p className="font-lato ">1234</p>
                  </div>
                  <div className="d-flex align-items-center conta">
                    <h5 className="font-lato ">Conta: </h5>
                    <p className="font-lato ">1234</p>
                  </div>
                </div>
                <div className="nome_destinatario d-flex align-items-center">
                  <h5 className="font-lato ">Nome do destinatário:</h5>
                  <p className="font-lato ">Luiza Soares</p>
                </div>
              </div>
              <div className="form_pagmento_wrapper">
                <h2 className="font-lato form_heading_pagmento">
                  Forma de pagamento
                </h2>
                <div className="main_form_pagmento">
                  <div className="input_margin_form">
                    <label className="form-label font-lato ">
                      Número do cartão
                    </label>
                    <input
                      placeholder={
                        formData.cardNumber === 0
                          ? "1234 1234 1234 1234"
                          : "1234 1234 1234 1234"
                      }
                      className="form-control font-lato"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={_handleValueChange}
                    />
                  </div>
                  <div className="d-flex input_margin_form">
                    <div className="w-50 date_">
                      <label className="form-label font-lato ">
                        Data de vencimento
                      </label>
                      <input
                        placeholder="12/25"
                        className="form-control font-lato"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={_handleValueChange}
                      />
                    </div>
                    <div className="w-50 cvv">
                      <label className="form-label font-lato ">CVV</label>
                      <input
                        placeholder={formData.cvv === 0 ? "123" : "123"}
                        className="form-control font-lato"
                        name="cvv"
                        value={formData.cvv}
                        onChange={_handleValueChange}
                      />
                    </div>
                  </div>
                  <div className="">
                    <label className="font-lato">Número de parcelass</label>
                    <select
                      className="form-select select_wrapper font-lato"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      defaultValue={"Open this select menu"}
                    >
                      <option className="font-lato">
                        Open this select menu
                      </option>
                      <option value="1" className="font-lato">
                         <p>
                          3x de <span> R$ 356,05</span>
                        </p>
                      
                      </option>
                      <option value="2" className="font-lato">
                      <p>
                          6x de <span> R$ 183,70</span>
                        </p>
                      
                      </option>
                      <option value="3" className="font-lato">
                      
                        <p>
                          12x de <span> R$ 96,71</span>
                        </p>
                      
                      </option>
                      <option value="4" className="font-lato">
                     
                        <p>
                          21x de <span> R$ 59,76</span>{" "}
                        </p>
                    
                      </option>
                    </select>
                  </div>
                  <div className="dados_wrap">
                    <h4 className="font-lato">Dados do titular do cartão </h4>
                    <div className="input_margin_form">
                      <label className="form-label font-lato">
                        Nome do titular
                      </label>
                      <input
                        placeholder="Patrícia Lopez"
                        className="form-control font-lato"
                        name="cardHolderName"
                        value={formData.cardHolderName}
                        onChange={_handleValueChange}
                      />
                    </div>
                    <div className="input_margin_form">
                      <label className="form-label font-lato">
                        Confirme o CPF/CNPJ
                      </label>
                      <input
                        placeholder="123.123.123-60"
                        className="form-control font-lato"
                        name="confirmCpf"
                        value={formData.confirmCpf}
                        onChange={_handleValueChange}
                      />
                    </div>
                    <div className="d-flex input_margin_form">
                      <div className="w-50 date_">
                        <label className="form-label font-lato ">CEP</label>
                        <input
                          placeholder="12340-123"
                          className="form-control font-lato"
                          name="pocket"
                          value={formData.pocket}
                          onChange={_handleValueChange}
                        />
                      </div>
                      <div className="w-50 cvv">
                        <label className="form-label font-lato ">Número</label>
                        <input
                          placeholder="1234"
                          className="form-control font-lato"
                          name="number"
                          value={formData.number}
                          onChange={_handleValueChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="total_area">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="font-lato">Taxa de serviço</h4>
                      <p className="font-lato">21x R$ 0,78</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="font-lato">Taxa do cartão</h4>
                      <p className="font-lato">21x R$ 3,38</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center total_pagar">
                      <h4 className="font-lato">Total à pagar</h4>
                      <p className="font-lato">R$ 4.673,58</p>
                    </div>
                    <div className="grand_total_pagar text-end">
                      <p className="font-lato">21x de R$ 222,55</p>
                    </div>
                    <button className="font-lato " onClick={onSubmit}>
                      Confirmar pagamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default FormPagmento;
