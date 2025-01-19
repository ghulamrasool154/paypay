import ButtonUI from "@/components/UI/button/button";
import Label from "@/components/UI/label/label";
import { isCloseModel, isOpenedModel } from "@/redux/slices/code-confirmation";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const FormWrappr = ({ children, handleSubmitFrom, register }) => {
  const dispath = useDispatch();

  const handelOpenedCodeConfirmMode = () => {
    dispath(isOpenedModel());
  };
  return (
    <form onSubmit={handleSubmitFrom}>
      {children}
      <div className="mb-3">
        <h2 className="font-lato m-0 right-side-heading fw-bold">
          Seus dados básicos
        </h2>
      </div>
      <div className="mb-4">
        <Label>Nome</Label>

        <input
          className="input-ui w-100"
          type="text"
          {...register("name", { required: true })}
          placeholder="Digite seu nome"
        />
      </div>
      <div className="mb-4">
        <Label>E-mail</Label>
        <input
          className="input-ui w-100"
          {...register("email", { required: true })}
          type="email"
          placeholder="Digite seu e-mal"
        />
      </div>
      <div className="mb-4">
        <Label>Telefone</Label>
        <input
          className="input-ui w-100"
          type="text"
          {...register("phoneNumber", { required: true })}
          placeholder="00 00000-0000"
        />
      </div>
      <div className="mb-4 d-flex align-items-center checked-btn">
        {/* <CheckBoxInput */}
        <input
          className="checkbox"
          type="checkbox"
          id="check"
          {...register("marketingOptIn")}
        />
        <Label htmlFor="check">
          Aceito receber informações e ofertas da PayPay.
        </Label>
      </div>
      <div className="text-end">
        <ButtonUI
          type="submit"
          variation="green"
          data-bs-toggle="modal"
          data-bs-target="#code-confirmation"
          // data-bs-target="#new-code-warning"
          // data-bs-target="#error-model"
          // data-bs-target="#bill-model"
          // data-bs-target="#success-model"
          // data-bs-target="#error-model"
          // data-bs-target="#exampleModal"
        >
          Próximo
        </ButtonUI>
      </div>
    </form>
  );
};

export default FormWrappr;
