import { IFormData } from "components/Form/constants";

export interface ISneaker extends IFormData {
  _id: string;
}

export const sortingOptions = {
  oldest: "oldestYear",
  smallest: "smallestSize",
  cheapest: "lowestPrice",
} as const;
