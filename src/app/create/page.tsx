"use client";
import Button from "@/app/components/Button";
import Welcome from "../components/Welcome";
import { useMediaQuery } from "usehooks-ts";

import styles from "./styles.module.css";

const Page = () => {
  const isWideScreen = useMediaQuery("(min-width: 810px)");

  return (
    <main className={styles.welcome_wrapper}>
      <section className={styles.welcome_img}>
        <Welcome />
      </section>
      <section className={styles.welcome_text}>
        {isWideScreen ? (
          <div className="title">
            Welcome <br></br>to a<br></br>sneaker
            <br></br> collector
          </div>
        ) : (
          <div className="title tc">
            Welcome <br></br>to a sneaker
            <br></br>
            collector
          </div>
        )}

        {isWideScreen ? (
          <p>
            This tool not only lets you showcase your prized sneaker
            <br></br>
            collection but also provides you with the tools to curate,
            <br></br>
            organize, and catalogue your sneakers
            <br></br> like never before.
          </p>
        ) : (
          <p className="tc">
            This tool not only lets you showcase your prized sneaker collection
            but also provides you with the tools to curate, organize, and
            catalogue your sneakers like never before.
          </p>
        )}
        <div className={styles.welcome_btn}>
          <Button text="Start your new collection" />
        </div>
      </section>
    </main>
  );
};

export default Page;
