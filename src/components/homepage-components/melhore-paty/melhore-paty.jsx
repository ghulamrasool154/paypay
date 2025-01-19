import React, { useState } from "react";
import "./melhore-paty.css";
import Image from "next/image";
import axios from "axios";
const MelhorePaty = () => {
  const [mobileData, setMobileData] = useState([
    {
      icon: "/assets/images/homepage/carbon_security.png",
      heading:
        "Proteja-se contra fraudes e mantenha suas finanças sob controle.",
      desp: "A Paty te avisa sempre que um boleto for emitido para sua empresa.",
    },
    {
      icon: "/assets/images/homepage/tick.png",
      heading: "Facilite o controle e o pagamento das suas contas.",
      desp: "A Paty organiza seus boletos por dia de vencimento.",
    },
    {
      icon: "/assets/images/homepage/bell.png",
      heading: "Evite esquecimentos, multas e juros sem motivo.",
      desp: "Receba lembretes da Paty na data de vencimento dos seus boletos.",
    },
  ]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [successResult, setSuccessResult] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [tooMany, setTooMany] = useState("");
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    let formattedNumber = event.target.value;
    formattedNumber = formattedNumber.replace(/\D/g, "");
    if (formattedNumber.length > 2) {
      formattedNumber = formattedNumber.replace(/(\d{2})(\d+)/, "$1 $2");
    }
    if (formattedNumber.length > 5) {
      formattedNumber = formattedNumber.replace(/(\d{5})(\d+)/, "$1-$2");
    }
    setPhoneNumber(formattedNumber);
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    const formattedNumber = phoneNumber.replace(/-/g, "");
    console.log(formattedNumber, "formattedNumber");
    let body = {
      phoneNumber: formattedNumber,
    };
    if (phoneNumber.length === 13) {
      axios
        .post(
          `https://api-site.paypayhub.com/main/v1/general/whatsapp/invite`,
          body
        )

        .then((resp) => {
          console.log(resp);
          setSuccessResult(resp.data.success);
          setPhoneNumber("");
          setNumberError(false);
          setTimeout(() => {
            setSuccessResult("");
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          setErrorMsg(err.response.data?.message);
          setTooMany(err.response.data);
          setNumberError(true);
        });
    } else {
      setNumberError(true);
    }
  };
  return (
    <section className="melhore_paty_wrapper">
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row  align-items-center">
            <div className="col-3 left_melhore_image">
              <div className="call_center_image_wrapper">
                <Image
                  src="/assets/images/homepage/cartoongirl.png"
                  alt="image"
                  width={493}
                  height={440}
                  className="responsive-image"
                />
              </div>
            </div>
            <div className="col-9 right_melhore_detail">
              <div className="paty_desp_detail">
                <h4 className="font-lexend-deca melhore_heading">
                  Melhore sua gestão financeira com a
                  <span> Paty, sua assistente de pagamentos</span>
                </h4>
                <div className="payment_assistant">
                  <Image
                    src={"/assets/images/homepage/whatsapp.png"}
                    alt="WA logo"
                    width={16}
                    height={16}
                  />
                  <h4 className="font-lato">
                    Assistente de pagamentos no WhatsApp
                  </h4>
                </div>
                <div className="notification_">
                  <h4 className="font-lato">2</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center listing_payment">
            <div className="col-lg-6 col-md-12">
              {mobileData.map((e, idx) => {
                return (
                  <div className="d-flex mobile_data_wrapper" key={idx}>
                    <div className="wrapper_icon">
                      <Image src={e.icon} alt="icon" width={32} height={32} />
                    </div>
                    <div className="icons_details_melhore">
                      <h4 className="font-lexend-deca">{e.heading}</h4>
                      <p className="font-lato">{e.desp}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="mobile_note_wrapper">
                <Image
                  src={"/assets/images/homepage/moiblewithnoti.png"}
                  alt=""
                  width={678}
                  height={575}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center input_row_wrapper">
            <div className="col-lg-5 col-md-8 col-sm-12">
              <h4 className="font-lato input_heading">
                Quero receber um convite da Paty
              </h4>
              <div className="input_wrapper_enviar">
                <Image
                  src={"/assets/images/homepage/Whatsappicon.png"}
                  alt=""
                  width={20}
                  height={20}
                />
                <input
                  placeholder="Digite seu número de WhatsApp"
                  className={
                    numberError
                      ? "input_mobile_area error form-control font-lato"
                      : "input_mobile_area form-control font-lato"
                  }
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  maxLength={13}
                />
                <button
                  className="enviar_btn font-lato"
                  onClick={_handleSubmit}
                >
                  Enviar
                </button>
                {numberError &&
                  (phoneNumber.length > 13 || phoneNumber.length < 13) && (
                    <p className="error_msg font-lato">
                      Número de telefone inválido.
                    </p>
                  )}
                {successResult === true ? (
                  <div className="true_msg">
                    <Image src={checked} alt="" />{" "}
                    <p>Seu convite foi enviado com sucesso!</p>
                    <p>{tooMany}</p>
                  </div>
                ) : (
                  ""
                )}
                {successResult === false ? (
                  <div className="true_msg">
                    <Image src={error} alt="" />{" "}
                    <p>Número de telefone inválido.</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MelhorePaty;
