import SneakerCard from "./components/Card/SneakerCard";
import NoResults from "./assets/images/NoResults";
import { dummyData } from "./dummyData";
export default function Home() {
  return (
    <>
      <div>home</div>
      <h1>hello</h1>
      <h2>Ui</h2>
      <NoResults />
      {dummyData.map((data) => (
        <SneakerCard
          name={data.name}
          brand={data.brand}
          price={data.price}
          size={data.size}
          year={data.year}
          key={data.name}
        />
      ))}
    </>
  );
}
