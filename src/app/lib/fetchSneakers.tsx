import { IFormData } from "components/Form/constants";
export const getSneakers = async () => {
  const url = `${process.env.NEXT_PUBLIC_SNEAKERS_APP_ENDPOINT}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  return await response.json();
};

export const deleteSneaker = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_SNEAKERS_APP_ENDPOINT}/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
};

export const submitSneakers = async (data: IFormData) => {
  const url = `${process.env.NEXT_PUBLIC_SNEAKERS_APP_ENDPOINT}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
};
export const updateSneaker = async (data: IFormData, id: string) => {
  const url = `${process.env.NEXT_PUBLIC_SNEAKERS_APP_ENDPOINT}/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
};
