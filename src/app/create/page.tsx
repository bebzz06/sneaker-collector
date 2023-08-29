import Button from "@/app/components/Button";
import Welcome from "../components/Welcome";

const Page = () => {
  return (
    <>
      <section>
        <Welcome />
      </section>
      <section className="welcome_copy">
        <h1 className="tc">Welcome to a sneaker collector</h1>
        <p className="tc">
          This tool not only lets you showcase your prized sneaker collection
          but also provides you with the tools to curate, organize, and
          catalogue your sneakers like never before.
        </p>
        <Button text="Start your new collection" />
      </section>
    </>
  );
};

export default Page;
