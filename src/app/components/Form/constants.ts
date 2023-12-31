export interface IFormData {
  name: string;
  brand: string;
  sizeUs: number;
  price: number;
  year: number;
}

export enum INPUT_TYPE {
  TEXT = "text",
  NUMBER = "number",
}
export interface IFormField {
  label: string;
  name: string;
  type: INPUT_TYPE;
}

export const FORM_FIELDS_SCHEMA: ReadonlyArray<IFormField> = [
  {
    label: "Name",
    name: "name",
    type: INPUT_TYPE.TEXT,
  },
  {
    label: "Brand",
    name: "brand",
    type: INPUT_TYPE.TEXT,
  },
  {
    label: "Size US",
    name: "sizeUs",
    type: INPUT_TYPE.NUMBER,
  },
  {
    label: "Price",
    name: "price",
    type: INPUT_TYPE.NUMBER,
  },
  {
    label: "Year",
    name: "year",
    type: INPUT_TYPE.NUMBER,
  },
];
