import styles from "./styles.module.css";
import { Button } from "components";
import Link from "next/link";
import { BUTTON_SIZE, BUTTON_OPTIONS } from "components/Button/constants";

const { welcome_text, w_screen, welcome_btn, small_screen, wide_screen } =
  styles;
const Page = () => {
  return (
    <>
      <section className={welcome_text}>
        <div className={`title ${wide_screen} `}>
          Welcome <br></br>to a<br></br>sneaker
          <br></br> collector
        </div>
        <div className={`title ${small_screen}`}>
          Welcome <br></br>to a sneaker
          <br></br>
          collector
        </div>
        <p className={wide_screen}>
          This tool not only lets you showcase your prized sneaker
          <br></br>
          collection but also provides you with the tools to curate,
          <br></br>
          organize, and catalogue your sneakers
          <br></br> like never before.
        </p>
        <p className={small_screen}>
          This tool not only lets you showcase your prized sneaker collection
          but also provides you with the tools to curate, organize, and
          catalogue your sneakers like never before.
        </p>
        <div className={welcome_btn}>
          <Link href={"/main"}>
            <Button
              size={BUTTON_SIZE.LARGE}
              customClass={w_screen}
              text={BUTTON_OPTIONS.START_COLLECTION}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
