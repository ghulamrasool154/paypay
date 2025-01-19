import React from "react";
import "./payment-accepted.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const PaymentAccepted = () => {
  const router = useRouter();

  return (
    <>
      <div className="offcanvas-header accepted_wrapper">
        <button
          type="button"
          className=" closed_button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <Image src={"/reject-accpeted/x.svg"} alt="" width={24} height={24} />
        </button>
      </div>
      <div className="offcanvas-body accepted-modal-wrapper  d-flex">
        <div className="">
          <div className="accepted_content">
            <Image
              src={"/reject-accpeted/accepted.png"}
              alt=""
              width={42}
              height={42}
            />
            <div>
              <h4 className="font-lato">
                Pagamento <br /> foi realizado
                <br /> com <br />
                sucesso!
              </h4>
              <p className="font-lato">
                Dentro de alguns instantes, você deve receber um comprovante no
                e-mail patricalopez@email.com
              </p>
            </div>
            <div className="sidebar_button_wrapper">
              <button className="font-lato comprovante">
                Baixar comprovante
              </button>
              <button
                className="font-lato outra_conta"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
                onClick={() => router.push("/pagamento")}
              >
                Pagar outra conta
              </button>
            </div>
          </div>
          <div className="app_pay d-flex">
            <div className="app_pay_left_side">
              <h4 className="font-lexend-deca">
                Quer taxas melhores? <br /> Baixe o app PayPay
              </h4>
              <p className="font-poppins">
                Além de pagar com taxas exclusivas, você contará com a Paty, que
                organiza seus boletos e te envia lembretes para nunca atrasar.
              </p>
              <button className="font-lato">Baixar o App</button>
            </div>
            <div className="app_pay_right_side">
              <Image
                src={"/assets/images/homepage/mob1.png"}
                alt=""
                width={250}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentAccepted;
