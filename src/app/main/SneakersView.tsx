"use client";
import React from "react";
import styles from "./styles.module.css";
import { IMainPageViewProps } from "./constants";
import { Search, Button, InputSelect, SneakerCard } from "components";
import { dummyData } from "dummyData";
const {
  btn_widescreen,
  main_btn,
  main_search,
  btn_fixed,
  main_select,
  main_sneaker_cards,
} = styles;

const SneakersView: React.FC<IMainPageViewProps> = ({
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
        <>
          <section className={main_select}>
            <InputSelect />
          </section>
          <section className={main_search}>
            <Search />
          </section>
        </>
      )}

      <section className={main_sneaker_cards}>
        {dummyData.map((data, i) => (
          <SneakerCard
            name={data.name}
            brand={data.brand}
            price={data.price}
            size={data.size}
            year={data.year}
            key={i}
          />
        ))}
      </section>
      {!isWideScreen && (
        <section className={`${main_btn} ${btn_fixed}`}>
          <Button onClick={handleOpenModal} text="Add new sneakers" />
        </section>
      )}
    </>
  );
};

export default SneakersView;
