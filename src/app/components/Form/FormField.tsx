import styles from "./styles.module.css";
import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  register: any; // This should be of type Register from react-hook-form
  errors: any; // This should be of type FieldErrors from react-hook-form
  type: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  errors,
  type,
}) => (
  <div className={name !== "year" ? styles.spacing_form : ""}>
    <label className={styles.label_form}>{label}</label>
    <input
      className={styles.input_form}
      {...register(name, {
        required: { value: true, message: `${label} is required` },
      })}
      type={type}
    />

    {errors[name] && (
      <p className={styles.error_message}>{label} is required</p>
    )}
  </div>
);

export default FormField;
