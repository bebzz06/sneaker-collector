import styles from "./styles.module.css";

interface IFormFieldProps {
  label: string;
  name: string;
  register: any; // This should be of type Register from react-hook-form
  errors: any; // This should be of type FieldErrors from react-hook-form
  type: string;
}
const { spacing_form, label_form, input_form, error_message, no_spacing } =
  styles;
const FormField: React.FC<IFormFieldProps> = ({
  label,
  name,
  register,
  errors,
  type,
}) => (
  <div className={name !== "year" ? spacing_form : no_spacing}>
    <label className={label_form}>{label}</label>
    <input
      className={input_form}
      {...register(name, {
        required: { value: true, message: `${label} is required` },
      })}
      type={type}
    />

    {errors[name] && <p className={error_message}>{label} is required</p>}
  </div>
);

export default FormField;
