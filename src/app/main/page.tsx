"use client";
import Button from "@/app/components/Button";
import { Collection } from "../components/Collection";
import Search from "../components/Search";
import styles from "./styles.module.css";
import { useMediaQuery } from "usehooks-ts";
const Page = () => {
  const isWideScreen = useMediaQuery("(min-width: 810px)");
  return (
    <main className={styles.main_wrapper}>
      <section className={styles.main_title}>
        <div className="title ">Your collection</div>
      </section>

      {isWideScreen ? (
        <section className={styles.main_search}>
          <Search />
          <Button text="Add new sneakers" />
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
          <Button text="Add new sneakers" />
        </section>
      )}
    </main>
  );
};

export default Page;
