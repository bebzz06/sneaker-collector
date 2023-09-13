"use client";
import { Modal, Form } from "components";
import { useState, useEffect } from "react";
import EmptyView from "./EmptyView";
import SneakersView from "./SneakersView";
import { getSneakers } from "lib/fetchSneakers";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sneakers, setSneakers] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const fetchSneakers = async () => {
    //loading
    let data;
    try {
      data = await getSneakers();
    } catch (error) {
      console.log(error);
    } finally {
      setSneakers(data);
    }
  };

  useEffect(() => {
    fetchSneakers();
  }, []);

  return (
    <>
      {!!sneakers ? (
        <SneakersView sneakers={sneakers} openModal={openModal} />
      ) : (
        <EmptyView openModal={openModal} />
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form onClose={closeModal} />
      </Modal>
    </>
  );
};

export default Page;
