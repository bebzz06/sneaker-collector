"use client";
import { useMediaQuery } from "usehooks-ts";
import styles from "./styles.module.css";
import { Button } from "components";
import Link from "next/link";

const { welcome_text, w_screen, welcome_btn } = styles;
const Page = () => {
  const isWideScreen = useMediaQuery("(min-width: 810px)");

  return (
    <>
      {isWideScreen ? (
        <section className={welcome_text}>
          <div className="title">
            Welcome <br></br>to a<br></br>sneaker
            <br></br> collector
          </div>
          <p>
            This tool not only lets you showcase your prized sneaker
            <br></br>
            collection but also provides you with the tools to curate,
            <br></br>
            organize, and catalogue your sneakers
            <br></br> like never before.
          </p>
          <div className={welcome_btn}>
            <Link href={"/main"}>
              <Button customClass={w_screen} text="Start your new collection" />
            </Link>
          </div>
        </section>
      ) : (
        <section className={welcome_text}>
          <div className="title tc">
            Welcome <br></br>to a sneaker
            <br></br>
            collector
          </div>
          <p className="tc">
            This tool not only lets you showcase your prized sneaker collection
            but also provides you with the tools to curate, organize, and
            catalogue your sneakers like never before.
          </p>
          <div className={welcome_btn}>
            <Link href={"/main"}>
              <Button customClass={w_screen} text="Start your new collection" />
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
