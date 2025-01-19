import Label from "@/components/UI/label/label";
import React from "react";
import FormWrappr from "../form-wrappr";
import { useForm } from "react-hook-form";

const Pixform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hanldeSeneBoletoForm = (data) => {
    console.log("hanldeSeneBoletoForm", data);
  };
  return (
    <FormWrappr
      handleSubmitFrom={handleSubmit(hanldeSeneBoletoForm)}
      register={register}
      errors={errors}
    >
      <div className="mb-4">
        <Label>Chave Pix</Label>
        <input
          {...register("pixKey", { required: true })}
          className="input-ui w-100"
          type="text"
          placeholder="Digite a chave Pix"
        />
      </div>
      <div className="mb-4">
        <Label>Valor do Pix</Label>
        <input
          {...register("value", { required: true })}
          className="input-ui w-100"
          type="text"
          placeholder="Insira o valor que você deseja pagar"
        />
      </div>
    </FormWrappr>
  );
};

export default Pixform;
