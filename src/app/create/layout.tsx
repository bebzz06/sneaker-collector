import React from "react";
import styles from "./styles.module.css";
import Welcome from "../assets/images/Welcome";
import { Button } from "components";
import Link from "next/link";

const { welcome_wrapper, welcome_img, w_screen } = styles;
const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={welcome_wrapper}>
      <section className={welcome_img}>
        <Welcome />
      </section>
      {children}
      <section className={styles.welcome_btn}>
        <Link href={"/main"}>
          <Button customClass={w_screen} text="Start your new collection" />
        </Link>
      </section>
    </main>
  );
};

export default CreateLayout;
