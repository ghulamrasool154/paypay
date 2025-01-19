"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./checkout.css";
import RightCheckout from "./right-checkout/right-checkout";
import LeftCheckout from "./left-checkout/left-checkout";
const BoletoCheckoutPage = () => {
  const bills = [
    {
      status: "vencido",
      beneficiaryName:
        "use square brackets to generate a property on the fly using any arbitrary value.",
      dueDate: "2024-11-14",
      value: 351.75,
      beneficiaryIdentity: "01234567000119",
      digitableLine: "34191090810602931067603922160001895570000207714",
      originalValue: 328.0,
      fineValue: 22.75,
      interestValue: 1.0,
      discountValue: 0,
    },
    {
      status: "pago",
      beneficiaryName: "Agua Pureza Ltda.",
      dueDate: "2024-11-10",
      value: 200.5,
      beneficiaryIdentity: "01234567000120",
      digitableLine: "237929383000000200005900102000001234567890000",
      originalValue: 190.0,
      fineValue: 10.5,
      interestValue: 0.0,
      discountValue: 0,
    },
    {
      status: "em-aberto",
      beneficiaryName: "Telecomunicacoes Brasil",
      dueDate: "2024-11-20",
      value: 120.0,
      beneficiaryIdentity: "01234567000121",
      digitableLine: "104911123000001200055670011112222000012345678",
      originalValue: 120.0,
      fineValue: 0.0,
      interestValue: 0.0,
      discountValue: 0,
    },
    {
      status: "cancelado",
      beneficiaryName: "Internet Rápida Ltda.",
      dueDate: "2024-11-05",
      value: 180.25,
      beneficiaryIdentity: "01234567000122",
      digitableLine: "033991000000001802566705000019112345670001123",
      originalValue: 170.0,
      fineValue: 10.25,
      interestValue: 0.0,
      discountValue: 0,
    },
  ];

  return (
    <div className="check-out">
      <div className="sections paypay-width pad-80 pad-tb-60">
        <div className="container-full">
          <div className="row m-0">
            <div className="col">
              <Link
                href=""
                className="back-link font-lato fw-medium text-decoration-none"
              >
                <i className="fa-solid fa-chevron-left"></i>
                <span className="d-inline-block">
                  Voltar para Dados básicos
                </span>
              </Link>
            </div>
          </div>
          <div className="row m-0 checkout-rows">
            <div className="col-12 col-lg-8">
              <LeftCheckout bills={bills} />
            </div>
            <div className="col-12 col-lg-4 pt-3 pt-lg-0">
              <RightCheckout bills={bills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoletoCheckoutPage;
