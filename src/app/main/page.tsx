"use client";
import Button from "@/app/components/Button/Button";
import { Collection } from "../assets/images/Collection";
import Search from "../components/SearchBar/Search";
import styles from "./styles.module.css";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Modal from "../components/Modal/Modal";
import Form from "../components/Form/Form";
import { dummyData } from "../dummyData";
import SneakerCard from "../components/Card/SneakerCard";

const {
  btn_widescreen,
  main_btn,
  main_img,
  main_search,
  main_text,
  main_wrapper,
  main_title,
} = styles;
const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isEmptyState = dummyData.length === 0;
  const isWideScreen = useMediaQuery("(min-width: 810px)");
  return (
    <main className={main_wrapper}>
      <section className={main_title}>
        <div className="title ">Your collection</div>
      </section>

      {isWideScreen ? (
        <section className={main_search}>
          <Search />
          <Button
            customClass={btn_widescreen}
            onClick={openModal}
            text="Add new sneakers"
          />
        </section>
      ) : (
        <section className={main_search}>
          <Search />
        </section>
      )}
      {isEmptyState ? (
        <>
          <section className={main_img}>
            <Collection />
          </section>
          <section className={main_text}>
            <p className="tc">
              Seem’s like you still didn’t add <br></br> any new sneaker to your
              collection
            </p>
          </section>
        </>
      ) : (
        dummyData.map((data) => (
          <SneakerCard
            name={data.name}
            brand={data.brand}
            price={data.price}
            size={data.size}
            year={data.year}
            key={data.name}
          />
        ))
      )}

      {!isWideScreen && (
        <section className={main_btn}>
          <Button onClick={openModal} text="Add new sneakers" />
        </section>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form />
      </Modal>
    </main>
  );
};

export default Page;
