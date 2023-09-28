import React from "react";
import styles from "./styles.module.css";
import { NotifyModalProvider } from "lib/NotifyModalContext";
import { SneakersProvider } from "lib/SneakersContext";

const { main_wrapper, main_title } = styles;
const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={main_wrapper}>
      <section className={main_title}>
        <div className="title ">Your collection</div>
      </section>
      <NotifyModalProvider>
        <SneakersProvider>{children}</SneakersProvider>
      </NotifyModalProvider>
    </main>
  );
};

export default CreateLayout;
