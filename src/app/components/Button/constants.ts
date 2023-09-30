export enum BUTTON_SIZE {
  SMALL = "small",
  LARGE = "large",
}
export enum BUTTON_TYPE {
  SUBMIT = "submit",
  BUTTON = "button",
}
export enum BUTTON_OPTIONS {
  OLDEST_YEAR = "Oldest Year",
  SMALLEST_SIZE = "Smallest Size",
  LOWEST_PRICE = "Lowest Price",
  START_COLLECTION = "Start your new collection",
  ADD_SNEAKERS = "Add new sneakers",
  SAVE = "Save",
  DELETE = "Delete",
}

export interface IButtonProps {
  text: BUTTON_OPTIONS;
  type?: BUTTON_TYPE;
  size: BUTTON_SIZE;
  customClass?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}
