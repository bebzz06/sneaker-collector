import { IFormData } from "components/Form/constants";

export interface ISneakers extends IFormData {
  _id: string;
}
export interface IMainPageViewProps {
  openModal: () => void;
  sneakers?: Array<ISneakers> | null;
}
