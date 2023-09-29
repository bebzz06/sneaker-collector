"use client";
import { useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { useSneakersContext } from "../../lib/SneakersContext";
import { sortingOptions } from "main/constants";

enum INPUT_SELECT_VALUE {
  OLDEST = "oldestYear",
  SMALLEST = "smallestSize",
  CHEAPEST = "lowestPrice",
}

const InputSelect = () => {
  const options = [
    { value: INPUT_SELECT_VALUE.OLDEST, label: "Sort by: Oldest Year" },
    { value: INPUT_SELECT_VALUE.SMALLEST, label: "Sort by: Smallest Size" },
    { value: INPUT_SELECT_VALUE.CHEAPEST, label: "Sort by: Lowest Price" },
  ];

  const {
    sortByOldestYear,
    sortByCheapestPrice,
    sortBySmallestSize,
    handleSetSneakers,
    handleActiveSortingOption,
    activeSortingOption,
  } = useSneakersContext();

  const handleSortChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    let newSortingOption = null;
    switch (selectedOption?.value) {
      case INPUT_SELECT_VALUE.OLDEST:
        newSortingOption = sortingOptions.oldest;
        handleSetSneakers(sortByOldestYear());
        break;
      case INPUT_SELECT_VALUE.CHEAPEST:
        newSortingOption = sortingOptions.cheapest;
        handleSetSneakers(sortByCheapestPrice());
        break;
      case INPUT_SELECT_VALUE.SMALLEST:
        newSortingOption = sortingOptions.smallest;
        handleSetSneakers(sortBySmallestSize());
        break;
      default:
        break;
    }
    if (newSortingOption) {
      handleActiveSortingOption(newSortingOption);
    }
  };
  const defaultValue = options.find(
    (option) => option.value === activeSortingOption
  );
  useEffect(() => {
    let selectedOption = null;
    switch (activeSortingOption) {
      case sortingOptions.oldest:
        selectedOption = options[0];
        break;
      case sortingOptions.cheapest:
        selectedOption = options[2];
        break;
      case sortingOptions.smallest:
        selectedOption = options[1];
        break;
      default:
        break;
    }
    handleSortChange(selectedOption);
  }, [activeSortingOption]);

  return (
    <Select
      options={options}
      classNamePrefix={"select"}
      defaultValue={defaultValue}
      className="select-container"
      onChange={handleSortChange}
    />
  );
};

export default InputSelect;
