"use client";
import styles from "./styles.module.css";
import { Collection } from "assets/images";
import { Search, Button } from "components";
import { BUTTON_OPTIONS, BUTTON_SIZE } from "components/Button/constants";
import { useNotifyModalContext } from "lib/NotifyModalContext";

const {
  btn_widescreen,
  main_btn,
  main_img,
  main_search,
  main_text,
  mb_large,
  wide_screen,
  small_screen,
} = styles;

const EmptyView: React.FC = () => {
  const { toggleModalDisplay } = useNotifyModalContext();
  return (
    <>
      <section className={`${main_search} ${wide_screen}`}>
        <Search isDisabled />
        <Button
          size={BUTTON_SIZE.LARGE}
          customClass={btn_widescreen}
          onClick={() => toggleModalDisplay()}
          text={BUTTON_OPTIONS.ADD_SNEAKERS}
        />
      </section>

      <section className={`${main_search} ${mb_large} ${small_screen}`}>
        <Search isDisabled />
      </section>

      <section className={main_img}>
        <Collection />
      </section>
      <section className={main_text}>
        <p className="tc">
          Seem’s like you still didn’t add <br></br> any new sneaker to your
          collection
        </p>
      </section>

      <section className={`${main_btn} ${small_screen}`}>
        <Button
          size={BUTTON_SIZE.LARGE}
          onClick={() => toggleModalDisplay()}
          text={BUTTON_OPTIONS.ADD_SNEAKERS}
        />
      </section>
    </>
  );
};

export default EmptyView;
