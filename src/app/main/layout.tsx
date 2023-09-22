import React from "react";
import styles from "./styles.module.css";
import { NotificationProvider } from "lib/NotificationContext";

const { main_wrapper, main_title } = styles;
const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={main_wrapper}>
      <section className={main_title}>
        <div className="title ">Your collection</div>
      </section>
      <NotificationProvider>{children}</NotificationProvider>
    </main>
  );
};

export default CreateLayout;
