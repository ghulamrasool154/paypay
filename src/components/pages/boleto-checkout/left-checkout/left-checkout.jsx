"use client";
import ButtonUI from "@/components/UI/button/button";
import React from "react";
import "./left-checkout.css";
import BillItem from "./bill-item/bill-item";
import { toast } from "react-toastify";
const LeftCheckout = ({ bills }) => {
  const handleToasity = () => {
    toast.success("Boleto excluído com sucesso.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "success-toast",
    });
  };
  return (
    <div className="left-checkout ">
      <ButtonUI variation="green" onClick={handleToasity}>
        <i className="fa-solid fa-plus"></i>
        <span className="d-inline-block ms-2">Adicionar boletos</span>
      </ButtonUI>
      <div className="w-100 overflow-y-hidden">
        <ul className="list-unstyled bills m-0 mt-4">
          <li className="d-flex justify-content-between align-items-center bil-list">
            <div className="item-1 w-100">
              <h2 className="font-lato fw-semibold m-0 th">Situação</h2>
            </div>
            <div className="item-2 w-100">
              <h2 className="font-lato fw-semibold m-0 th">Beneficiário</h2>
            </div>
            <div className="item-3 w-100">
              <h2 className="font-lato fw-semibold m-0 th">Vencimento</h2>
            </div>
            <div className="item-4 w-100">
              <h2 className="font-lato fw-semibold m-0 th">Valor a pagar</h2>
            </div>
            <div className="item-5 w-100"></div>
          </li>
          {bills.map((element, index) => {
            return <BillItem element={element} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftCheckout;
