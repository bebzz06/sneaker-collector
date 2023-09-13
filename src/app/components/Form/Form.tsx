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
import { submitSneakers } from "lib/fetchSneakers";

interface IFormProps {
  onClose: () => void;
}
const { btn_spacing_error, btn_spacing, w_btn } = styles;
const Form: React.FC<IFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    try {
      await submitSneakers(data);
    } catch (err) {
      console.log(err, "ERROR");
    } finally {
      onClose();
    }
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
