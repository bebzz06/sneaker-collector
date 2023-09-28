import styles from "./styles.module.css";
import { Welcome } from "assets/images";

const { welcome_wrapper, welcome_img } = styles;
const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={welcome_wrapper}>
      <section className={welcome_img}>
        <Welcome />
      </section>
      {children}
    </main>
  );
};

export default CreateLayout;
