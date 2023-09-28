"use client";
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
import { getSneakers, submitSneakers } from "lib/fetchSneakers";
import { useNotifyModalContext } from "lib/NotifyModalContext";
import { useSneakersContext } from "lib/SneakersContext";

const { btn_spacing_error, btn_spacing, w_btn } = styles;
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const { showError, showLoading, hideLoading, toggleModalDisplay } =
    useNotifyModalContext();
  const { handleSetSneakers, resetSearchQuery } = useSneakersContext();
  const onSubmit = async (data: IFormData) => {
    try {
      showLoading();
      await submitSneakers(data);
      const newSneakers = await getSneakers();
      //have to get sneakers because the id from api is needed.
      handleSetSneakers(newSneakers);
      resetSearchQuery();
    } catch (err) {
      console.log(err, "ERROR");
      showError();
    } finally {
      hideLoading();
      toggleModalDisplay();
    }
  };
  const isInputError = Object.keys(errors).length;
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
      <div className={isInputError ? btn_spacing_error : btn_spacing}>
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
