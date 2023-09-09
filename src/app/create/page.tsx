"use client";
import { useMediaQuery } from "usehooks-ts";
import styles from "./styles.module.css";

const { welcome_text } = styles;
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
        </section>
      )}
    </>
  );
};

export default Page;
