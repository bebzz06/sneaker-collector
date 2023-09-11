"use client";
import React from "react";
import { Button } from "components";
import { BUTTON_SIZE, BUTTON_OPTIONS } from "components/Button/constants";
import styles from "./styles.module.css";
const SortBy = () => {
  return (
    <>
      <span className={styles.sortby_label}>Sort by:</span>
      <div className={styles.sortby_btns}>
        <Button text={BUTTON_OPTIONS.OLDEST_YEAR} size={BUTTON_SIZE.SMALL} />
        <Button text={BUTTON_OPTIONS.SMALLEST_SIZE} size={BUTTON_SIZE.SMALL} />
        <Button text={BUTTON_OPTIONS.LOWEST_PRICE} size={BUTTON_SIZE.SMALL} />
      </div>
    </>
  );
};

export default SortBy;
