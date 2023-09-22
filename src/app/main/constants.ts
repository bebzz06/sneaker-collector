import { IFormData } from "components/Form/constants";

export interface ISneaker extends IFormData {
  _id: string;
}
export interface IMainPageViewProps {
  openModal: () => void;
  sneakers?: Array<ISneaker>;
  removeSneakers?: (id: string) => void;
}
