"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import Button from "../Button/Button";
import { IFormData, FORM_FIELDS_SCHEMA } from "./constants";
import styles from "./styles.module.css";
import {
  BUTTON_TYPE,
  BUTTON_SIZE,
  BUTTON_OPTIONS,
} from "components/Button/constants";

const { btn_spacing_error, btn_spacing, w_btn } = styles;
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };
  const isError = Object.keys(errors).length;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {FORM_FIELDS_SCHEMA.map((field) => (
        <FormField
          label={field.label}
          name={field.name}
          type={field.type}
          register={register}
          errors={errors}
          key={field.name}
        />
      ))}
      <div className={isError ? btn_spacing_error : btn_spacing}>
        <Button
          customClass={w_btn}
          size={BUTTON_SIZE.LARGE}
          text={BUTTON_OPTIONS.ADD_SNEAKERS}
          type={BUTTON_TYPE.SUBMIT}
        />
      </div>
    </form>
  );
};

export default Form;
