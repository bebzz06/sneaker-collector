import Button from "@/app/components/Button";
import Form from "../components/Form";

const Page = () => {
  return (
    <>
      <h1>Your Collection</h1>
      <input type="search" placeholder="Search" />
      <Button text="Add new sneakers" />
      <p>Seem’s like you still didn’t add any new sneaker to your collection</p>
      <Form />
    </>
  );
};

export default Page;
