"use client";
import Button from "@/app/components/Button";
import { Collection } from "../components/Collection";
import Search from "../components/Search";
import styles from "./styles.module.css";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Modal from "../components/Modal";
import Form from "../components/Form/Form";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const isWideScreen = useMediaQuery("(min-width: 810px)");
  return (
    <main className={styles.main_wrapper}>
      <section className={styles.main_title}>
        <div className="title ">Your collection</div>
      </section>

      {isWideScreen ? (
        <section className={styles.main_search}>
          <Search />
          <Button onClick={openModal} text="Add new sneakers" />
        </section>
      ) : (
        <section className={styles.main_search}>
          <Search />
        </section>
      )}

      <section className={styles.main_img}>
        <Collection />
      </section>
      <section className={styles.main_text}>
        <p className="tc">
          Seem’s like you still didn’t add <br></br> any new sneaker to your
          collection
        </p>
      </section>
      {!isWideScreen && (
        <section className={styles.main_btn}>
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
