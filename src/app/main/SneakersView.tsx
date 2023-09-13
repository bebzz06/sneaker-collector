"use client";
import React from "react";
import styles from "./styles.module.css";
import { IMainPageViewProps } from "./constants";
import { Search, Button, InputSelect, SneakerCard, SortBy } from "components";

import { BUTTON_OPTIONS, BUTTON_SIZE } from "components/Button/constants";
const {
  btn_widescreen,
  main_btn,
  main_search,
  btn_fixed,
  main_select,
  main_sneaker_cards,
  main_sort_by,
  wide_screen,
  small_screen,
} = styles;

const SneakersView: React.FC<IMainPageViewProps> = ({
  openModal,

  sneakers,
}) => {
  const handleOpenModal = () => {
    openModal();
  };

  return (
    <>
      <section className={`${main_search} ${wide_screen}`}>
        <Search />
        <Button
          size={BUTTON_SIZE.LARGE}
          customClass={btn_widescreen}
          onClick={handleOpenModal}
          text={BUTTON_OPTIONS.ADD_SNEAKERS}
        />
      </section>
      <section className={`${main_sort_by} ${wide_screen}`}>
        <SortBy />
      </section>

      <section className={`${main_select} ${small_screen}`}>
        <InputSelect />
      </section>
      <section className={`${main_search} ${small_screen}`}>
        <Search />
      </section>

      <section className={main_sneaker_cards}>
        {sneakers?.map((sneaker) => (
          <SneakerCard
            name={sneaker.name}
            brand={sneaker.brand}
            price={sneaker.price}
            size={sneaker.size}
            year={sneaker.year}
            _id={sneaker._id}
            key={sneaker._id}
          />
        ))}
      </section>

      <section className={`${main_btn} ${btn_fixed} ${small_screen}`}>
        <Button
          size={BUTTON_SIZE.LARGE}
          onClick={handleOpenModal}
          text={BUTTON_OPTIONS.ADD_SNEAKERS}
        />
      </section>
    </>
  );
};

export default SneakersView;
