"use client";
import React, { useState } from "react";
import "./header.css";
import Image from "next/image";
import ButtonUI from "@/components/UI/button/button";
import { Navigations } from "@/data/navigations";
import NavLink from "@/components/header/nav-link/nav-link";
import Link from "next/link";
import FormPagmento from "@/components/form-pagmento/form-pagmento";
import PayingBills from "@/components/paying-bills/paying-bills";
import RejectedPayment from "@/components/rejected-payment/rejected-payment";
import PaymentAccepted from "@/components/payment-accepted/payment-accepted";
const Header = () => {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);

  const handleClosed = () => {
    setIsOpenedSidebar(!isOpenedSidebar);
  };

  return (
    <>
      <header className="main-header">
        <div className="paypay-width main-head-wrap pad-80">
          <div className="container-full">
            <div className="row m-0 align-items-center">
              <div className="col-lg-4 col-8">
                <Link href="/" className="inline-block">
                  <Image
                    src="/images/logo.svg"
                    alt="demo"
                    width={100}
                    height={50}
                    className="paypay-logo"
                  />
                </Link>
              </div>
              <div className="col-lg-4 d-none  d-lg-block">
                <nav>
                  <ul className="list-unstyled d-flex align-item-center justify-content-center m-0 p-0">
                    {Navigations.map((nav, index) => {
                      return <NavLink key={index} {...nav} />;
                    })}
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 d-none d-lg-block text-end">
                <Link href="/pagamento" className="d-inline-block">
                  <ButtonUI> Pagar conta agora </ButtonUI>
                </Link>
                {/* <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Toggle right offcanvas
                </button> */}
              </div>
              <div className=" col-4 d-lg-none text-end cursor-pointer">
                <div className="menu-burger fs-3" onClick={handleClosed}>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpenedSidebar && (
        <div
          className="position-fixed top-0 bottom-0 end-0 start-0 sidbear-overlay"
          onClick={handleClosed}
        />
      )}
      <aside
        className={`position-fixed  top-0 bottom-0 mobile-sidebar p-3 ${
          isOpenedSidebar ? "open" : "close"
        }`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" className="d-inline-block">
            <Image
              src="/images/logo-white.svg"
              alt="demo"
              width={100}
              height={50}
              className="paypay-logo"
            />
          </Link>
          <div
            className="d-inline-block mobile-close fs-1 cursor-pointer"
            onClick={handleClosed}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <nav className="mt-3">
          <ul className="list-unstyled  m-0 p-0">
            {Navigations.map((nav, index) => {
              return (
                <NavLink key={index} {...nav} handleClosed={handleClosed} />
              );
            })}
            <li className="item">
              <Link href="/pagamento" className="d-inline-block">
                <ButtonUI variation="green"> Pagar conta agora </ButtonUI>
              </Link>
            </li>
            {/* <ButtonUI variation="green"> openModalright</ButtonUI> */}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Header;
