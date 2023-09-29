//state
import { useSneakersContext } from "lib/SneakersContext";
const SearchResults = () => {
  const { brandCounts } = useSneakersContext();

  return (
    <>
      <p>Search results for</p>
      {brandCounts?.map(([brand, count]) => (
        <div key={brand}>{`${brand}(${count})`}</div>
      ))}
    </>
  );
};

export default SearchResults;
