import { ReactNode } from "react";
import { CalendarIcon, CaretsIcon, DollarIcon, PlusIcon } from "./icons";
import { BUTTON_OPTIONS, BUTTON_SIZE } from "./constants";
import styles from "./styles.module.css";
const { mr_8, btn_large, btn_small, active } = styles;

export const getButtonClassName = (
  size: BUTTON_SIZE,
  customClass?: string,
  isActive?: boolean
): string => {
  let style = "";
  if (size === BUTTON_SIZE.LARGE) {
    style = btn_large;
  } else if (size === BUTTON_SIZE.SMALL) {
    style = btn_small;
    style = isActive ? `${btn_small} ${active}` : btn_small;
  }

  if (customClass) {
    style += ` ${customClass}`;
  }

  return style;
};

const ICONS: Record<BUTTON_OPTIONS, ReactNode> = {
  [BUTTON_OPTIONS.OLDEST_YEAR]: <CalendarIcon className={mr_8} />,
  [BUTTON_OPTIONS.SMALLEST_SIZE]: <CaretsIcon className={mr_8} />,
  [BUTTON_OPTIONS.LOWEST_PRICE]: <DollarIcon className={mr_8} />,
  [BUTTON_OPTIONS.ADD_SNEAKERS]: <PlusIcon className={mr_8} />,
  [BUTTON_OPTIONS.START_COLLECTION]: <></>,
};

export const getIcon = (text: BUTTON_OPTIONS): ReactNode => {
  return ICONS[text];
};
