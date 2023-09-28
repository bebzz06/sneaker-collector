"use client";
import { useEffect } from "react";
//views
import EmptyView from "./EmptyView";
import SneakersView from "./SneakersView";
//components
import { Modal, Form } from "components";
import { getSneakers } from "lib/fetchSneakers";
//state
import { useNotifyModalContext } from "lib/NotifyModalContext";
import { useSneakersContext } from "lib/SneakersContext";

const Page = () => {
  const { sneakers, handleSetSneakers, query } = useSneakersContext();

  const { showError, showLoading, hideLoading } = useNotifyModalContext();

  const fetchSneakers = async () => {
    let res;
    try {
      showLoading();
      res = await getSneakers();
    } catch (error) {
      console.log(error);
      showError();
    } finally {
      hideLoading();
      handleSetSneakers(res);
      return;
    }
  };

  const isEmptyview = sneakers?.length === 0 && query === "";
  const renderView = () => {
    switch (true) {
      case isEmptyview:
        return <EmptyView />;
      default:
        return <SneakersView />;
    }
  };

  useEffect(() => {
    fetchSneakers();
  }, []);

  return (
    <>
      {renderView()}
      <Modal>
        <Form />
      </Modal>
    </>
  );
};

export default Page;
