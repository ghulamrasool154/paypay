import React from "react";
import "./pagemento.css";
import Image from "next/image";
import Link from "next/link";
import { payemetOptions } from "@/data/pagemento";
const PaymentoPage = () => {
  return (
    <div className="paymento-page">
      <section className="payment-section paypay-width pad-80 pad-tb-160">
        <div className="container-full">
          <div className="row m-0 align-items-center">
            <div className="col-12 col-md-6">
              <div className="pay-left w-100">
                <h2 className="font-lexend-deca fw-semibold left-title m-0">
                  O que você quer pagar hoje?
                </h2>
                <p className="font-lato left-des fw-medium">
                  Pague Pix ou boleto em até 21x com PayPay, usando seu cartão
                  de crédito.
                </p>
                <h6 className="font-lato left-sub-title fw-bold m-0">
                  É rápido, simples e prático!
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="pay-right w-100 ms-0 ms-md-auto mt-3 mt-md-0  ">
                <h2 className="font-lato m-0 pay-right-title fw-medium">
                  O que você deseja pagar?
                </h2>
                <ul className="mt-4 list-unstyled payment-states gap-3 d-flex align-content-center ">
                  {payemetOptions.map((option, index) => {
                    return (
                      <li className="right-item text-center w-100" key={index}>
                        <Link
                          href={option.link}
                          className="d-block text-decoration-none p-3 p-md-4"
                        >
                          <Image
                            src={option.src}
                            width={100}
                            height={100}
                            alt={option.title}
                          />
                          <h6 className="right-item-title font-lato fw-semibold m-0">
                            {option.title}
                          </h6>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentoPage;
