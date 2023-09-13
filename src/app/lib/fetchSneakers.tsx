import { IFormData } from "components/Form/constants";
export const getSneakers = async () => {
  const url = `${process.env.NEXT_PUBLIC_SNEAKERS_APP_ENDPOINT}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  console.log(response, "success");
  return await response.json();
};

export const deleteSneaker = async (id: string) => {
  // loading?

  try {
    const url = `${process.env.NEXT_PUBLIC_SNEAKERS_APP_ENDPOINT}/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (err) {
  } finally {
    // Update state or trigger a re-fetch as needed.
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

  const responseData = await response.json();
  console.log(responseData, "it worked succesfully");
};
