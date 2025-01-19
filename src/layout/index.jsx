"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import {
  BillModelExclueModel,
  CodeConfirmationModel,
  ErrorModel,
  NewCodeModel,
  NewCodesWithWarning,
  SuccessModel,
} from "@/components/models";
import { ToastContainer } from "react-toastify";
import OffCanvasModal from "@/components/models/offcanvas";

const MainLayout = ({ children }) => {
  const codeConfirmation = useSelector((state) => state.codeConfirmation);

  return (
    <div className="paypay">
      <Header />
      <CodeConfirmationModel />
      <NewCodeModel />
      <NewCodesWithWarning />
      <SuccessModel />
      <ErrorModel />
      <BillModelExclueModel />
       <OffCanvasModal/>
      <main>{children}</main>
      <Footer />
      <ToastContainer
        style={{
          width: "350px",
          left: 0,
          bottom: "40px",
          padding: "0",
        }}
      />
    </div>
  );
};

export default MainLayout;
