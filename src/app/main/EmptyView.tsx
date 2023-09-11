"use client";
import React from "react";
import styles from "./styles.module.css";
import { Collection } from "assets/images/Collection";
import { Search, Button } from "components";
import { IMainPageViewProps } from "./constants";
import { BUTTON_OPTIONS, BUTTON_SIZE } from "components/Button/constants";
const { btn_widescreen, main_btn, main_img, main_search, main_text, mb_large } =
  styles;

const EmptyView: React.FC<IMainPageViewProps> = ({
  openModal,
  isWideScreen,
}) => {
  const handleOpenModal = () => {
    openModal();
  };
  return (
    <>
      {isWideScreen ? (
        <section className={main_search}>
          <Search />
          <Button
            size={BUTTON_SIZE.LARGE}
            customClass={btn_widescreen}
            onClick={handleOpenModal}
            text={BUTTON_OPTIONS.ADD_SNEAKERS}
          />
        </section>
      ) : (
        <section className={`${main_search} ${mb_large}`}>
          <Search />
        </section>
      )}

      <section className={main_img}>
        <Collection />
      </section>
      <section className={main_text}>
        <p className="tc">
          Seem’s like you still didn’t add <br></br> any new sneaker to your
          collection
        </p>
      </section>
      {!isWideScreen && (
        <section className={main_btn}>
          <Button
            size={BUTTON_SIZE.LARGE}
            onClick={handleOpenModal}
            text={BUTTON_OPTIONS.ADD_SNEAKERS}
          />
        </section>
      )}
    </>
  );
};

export default EmptyView;
