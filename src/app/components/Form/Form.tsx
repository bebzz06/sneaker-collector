"use client";
import { useEffect } from "react";
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
import {
  getSneakers,
  submitSneakers,
  deleteSneaker,
  updateSneaker,
} from "lib/fetchSneakers";
import { useNotifyModalContext } from "lib/NotifyModalContext";
import { useSneakersContext } from "lib/SneakersContext";

const { btn_spacing_error, btn_spacing, w_btn, edit_form, btn_edit, disabled } =
  styles;

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm<IFormData>();

  const { showError, showLoading, hideLoading, toggleModalDisplay } =
    useNotifyModalContext();
  const {
    sneakers,
    handleSetSneakers,
    resetSearchQuery,
    selectedSneaker,
    onRemoveSneaker,
    query,
  } = useSneakersContext();
  const onSubmit = async (data: IFormData) => {
    try {
      showLoading();
      if (selectedSneaker) {
        await updateSneaker(data, selectedSneaker._id);
        const newSneaker = { ...data, _id: selectedSneaker._id };
        const updatedSneakers = sneakers.map((sneaker) => {
          if (sneaker._id === newSneaker._id) {
            return newSneaker;
          } else {
            return sneaker;
          }
        });
        handleSetSneakers(updatedSneakers);
      } else {
        await submitSneakers(data);
        //have to fetch sneakers to get them with the id.
        const newSneakers = await getSneakers();
        handleSetSneakers(newSneakers);
      }
      if (query) {
        resetSearchQuery();
      }
    } catch (err) {
      console.log(err, "ERROR");
      showError();
    } finally {
      hideLoading();
      toggleModalDisplay();
    }
  };
  const removeSneaker = async () => {
    try {
      showLoading();
      if (selectedSneaker) deleteSneaker(selectedSneaker._id);
    } catch (error) {
      console.log(error);
      showError();
    } finally {
      if (selectedSneaker) onRemoveSneaker(selectedSneaker?._id);
      hideLoading();
      toggleModalDisplay();
    }
  };
  useEffect(() => {
    if (selectedSneaker) {
      const { name, brand, price, sizeUs, year } = selectedSneaker;
      setValue("name", name);
      setValue("brand", brand);
      setValue("price", price);
      setValue("sizeUs", sizeUs);
      setValue("year", year);
    }
  }, [selectedSneaker, setValue]);
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
      {selectedSneaker ? (
        <div
          className={
            isInputError
              ? `${btn_spacing_error} ${edit_form}`
              : `${btn_spacing} ${edit_form}`
          }
        >
          <Button
            customClass={
              isDirty
                ? `${w_btn} ${btn_edit}`
                : `${w_btn} ${btn_edit} ${disabled}`
            }
            size={BUTTON_SIZE.LARGE}
            text={BUTTON_OPTIONS.SAVE}
            type={BUTTON_TYPE.SUBMIT}
            isDisabled={!isDirty}
          />
          <Button
            onClick={removeSneaker}
            customClass={`${w_btn} ${btn_edit}`}
            size={BUTTON_SIZE.LARGE}
            text={BUTTON_OPTIONS.DELETE}
          />
        </div>
      ) : (
        <div className={isInputError ? btn_spacing_error : btn_spacing}>
          <Button
            customClass={w_btn}
            size={BUTTON_SIZE.LARGE}
            text={BUTTON_OPTIONS.ADD_SNEAKERS}
            type={BUTTON_TYPE.SUBMIT}
          />
        </div>
      )}
    </form>
  );
};

export default Form;
