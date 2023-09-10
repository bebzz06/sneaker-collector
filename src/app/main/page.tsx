"use client";

import { Modal, Form } from "components";

import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { dummyData } from "dummyData";
import EmptyView from "./EmptyView";
import SneakersView from "./SneakersView";

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
    <>
      {isEmptyState ? (
        <EmptyView openModal={openModal} isWideScreen={isWideScreen} />
      ) : (
        <SneakersView openModal={openModal} isWideScreen={isWideScreen} />
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  );
};

export default Page;
