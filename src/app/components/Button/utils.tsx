import { ReactNode } from "react";
import {
  CalendarIcon,
  CaretsIcon,
  DollarIcon,
  PlusIcon,
  TrashIcon,
} from "./icons";
import { BUTTON_OPTIONS, BUTTON_SIZE } from "./constants";
import styles from "./styles.module.css";
const { mr_8, btn_large, btn_small, active } = styles;

export const getButtonClassName = (
  size: BUTTON_SIZE,
  customClass?: string,
  isActive?: boolean
): string => {
  let style = "";

  switch (size) {
    case BUTTON_SIZE.LARGE:
      style = btn_large;
      break;
    case BUTTON_SIZE.SMALL:
      style = isActive ? `${btn_small} ${active}` : btn_small;
      break;
    default:
      break;
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
  [BUTTON_OPTIONS.DELETE]: <TrashIcon className={mr_8} />,
  [BUTTON_OPTIONS.SAVE]: <></>,
  [BUTTON_OPTIONS.START_COLLECTION]: <></>,
  [BUTTON_OPTIONS.ERROR]: <></>,
};

export const getIcon = (text: BUTTON_OPTIONS): ReactNode => {
  return ICONS[text];
};
