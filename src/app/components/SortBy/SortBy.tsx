"use client";
import { useEffect } from "react";
import { Button } from "components";
import { BUTTON_SIZE, BUTTON_OPTIONS } from "components/Button/constants";
import { useSneakersContext } from "lib/SneakersContext";
import { ISneaker, sortingOptions } from "main/constants";
import styles from "./styles.module.css";

const SortBy = () => {
  const {
    sortByCheapestPrice,
    sortByOldestYear,
    sortBySmallestSize,
    handleSetSneakers,
    activeSortingOption,
    handleActiveSortingOption,
  } = useSneakersContext();

  const handleSort = (sortingFn: () => ISneaker[], option: string) => {
    handleActiveSortingOption(option);

    handleSetSneakers(sortingFn());
  };
  useEffect(() => {
    handleSort(sortByOldestYear, sortingOptions.oldest);
  }, []);

  return (
    <>
      <span className={styles.sortby_label}>Sort by:</span>
      <div className={styles.sortby_btns}>
        <Button
          onClick={() => handleSort(sortByOldestYear, sortingOptions.oldest)}
          text={BUTTON_OPTIONS.OLDEST_YEAR}
          size={BUTTON_SIZE.SMALL}
          isActive={activeSortingOption === sortingOptions.oldest}
        />
        <Button
          onClick={() =>
            handleSort(sortBySmallestSize, sortingOptions.smallest)
          }
          text={BUTTON_OPTIONS.SMALLEST_SIZE}
          size={BUTTON_SIZE.SMALL}
          isActive={activeSortingOption === sortingOptions.smallest}
        />
        <Button
          onClick={() =>
            handleSort(sortByCheapestPrice, sortingOptions.cheapest)
          }
          text={BUTTON_OPTIONS.LOWEST_PRICE}
          size={BUTTON_SIZE.SMALL}
          isActive={activeSortingOption === sortingOptions.cheapest}
        />
      </div>
    </>
  );
};

export default SortBy;
