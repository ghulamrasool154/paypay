import FormPagmento from "@/components/form-pagmento/form-pagmento";
import PayingBills from "@/components/paying-bills/paying-bills";
import PaymentAccepted from "@/components/payment-accepted/payment-accepted";
import PendingPayments from "@/components/pending-payments/pending-payments";
import RejectedPayment from "@/components/rejected-payment/rejected-payment";
import React, { useState } from "react";

const OffCanvasModal = () => {
  const [currentComponent, setCurrentComponent] = useState("FormPagmento");
  
  const handleSubmitForm = () => {
    setCurrentComponent("PaymentPending"); // Show PaymentPending first
    setTimeout(() => {
      setCurrentComponent("PayingBills"); // Then show PayingBills after 3 seconds
      setTimeout(() => {
        setCurrentComponent("PaymentAccepted"); // Show PaymentAccepted after another 3 seconds
        setTimeout(() => {
          setCurrentComponent("RejectedPayment"); // Show RejectedPayment after another 3 seconds
        }, 12000);
      }, 12000);
    }, 12000);
  };

  const handleRetry = () => {
    setCurrentComponent("FormPagmento"); // Reset back to FormPagmento
  };

  return (
    <div
      className="offcanvas offcanvas-end sidebar_modal_wrapper"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      {currentComponent === "FormPagmento" && (
        <FormPagmento onSubmit={handleSubmitForm} />
      )}
      {currentComponent === "PaymentPending" && <PendingPayments />}
      {currentComponent === "PayingBills" && <PayingBills />}
      {currentComponent === "PaymentAccepted" && <PaymentAccepted />}
      {currentComponent === "RejectedPayment" && (
        <RejectedPayment onRetry={handleRetry} />
      )}
    </div>
  );
};

export default OffCanvasModal;
