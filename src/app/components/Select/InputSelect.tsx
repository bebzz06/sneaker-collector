"use client";
import Select from "react-select";

export enum INPUT_SELECT_VALUE {
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

  const defaultValue = options[0];

  return (
    <Select
      options={options}
      classNamePrefix={"select"}
      defaultValue={defaultValue}
      className="select-container"
    />
  );
};

export default InputSelect;
