"use client";
import React from "react";
import styles from "./styles.module.css";
import { Collection } from "assets/images/Collection";
import { Search, Button } from "components";
import { IMainPageViewProps } from "./constants";
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
            customClass={btn_widescreen}
            onClick={handleOpenModal}
            text="Add new sneakers"
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
          <Button onClick={handleOpenModal} text="Add new sneakers" />
        </section>
      )}
    </>
  );
};

export default EmptyView;
