"use client";
import { useState, useEffect } from "react";
import { Modal, Form } from "components";
import EmptyView from "./EmptyView";
import SneakersView from "./SneakersView";
import { getSneakers } from "lib/fetchSneakers";
import { ISneaker } from "./constants";
import { useNotification } from "lib/NotificationContext";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sneakers, setSneakers] = useState<ISneaker[]>([]);
  const { showError, showLoading, hideLoading } = useNotification();
  const toggleModalDisplay = () => setIsModalOpen(!isModalOpen);
  console.log("Main page rendered");
  const fetchSneakers = async () => {
    let data;
    try {
      showLoading();
      data = await getSneakers();
    } catch (error) {
      console.log(error);
      showError();
    } finally {
      hideLoading();
      setSneakers(data);
      return;
    }
  };
  const removeSneakers = (id: string) => {
    const newSneakers = sneakers.filter((sneaker) => sneaker._id !== id);
    setSneakers(newSneakers);
  };
  const addSneaker = (newSneakers: ISneaker[]) => {
    setSneakers(newSneakers);
  };

  useEffect(() => {
    fetchSneakers();
  }, []);

  return (
    <>
      {sneakers?.length > 0 ? (
        <SneakersView
          sneakers={sneakers}
          removeSneakers={removeSneakers}
          openModal={toggleModalDisplay}
        />
      ) : (
        <EmptyView openModal={toggleModalDisplay} />
      )}
      <Modal isOpen={isModalOpen} onClose={toggleModalDisplay}>
        <Form addSneaker={addSneaker} onClose={toggleModalDisplay} />
      </Modal>
    </>
  );
};

export default Page;
