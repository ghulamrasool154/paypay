import Label from "@/components/UI/label/label";
import React from "react";
import FormWrappr from "../form-wrappr";
import { useForm } from "react-hook-form";

const Boletoform = () => {
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
        <Label>Insira a linha digitável dos boletos</Label>
        <textarea
          {...register("codes", { required: true })}
          className="input-ui textarea w-100 "
          placeholder="Cole a linha digitável de um ou mais boletos"
        ></textarea>
      </div>
    </FormWrappr>
  );
};

export default Boletoform;
