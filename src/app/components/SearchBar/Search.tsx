"use client";
import IconSearch from "./IconSearch";
import styles from "./styles.module.css";
import { useSneakersContext } from "lib/SneakersContext";
interface ISearchProps {
  isDisabled: boolean | true;
}
const { input_search_container, ml_8 } = styles;
const Search: React.FC<ISearchProps> = ({ isDisabled }) => {
  const { query, handleQueryChange } = useSneakersContext();
  return (
    <div className={input_search_container}>
      <IconSearch />
      <input
        className={ml_8}
        type="search"
        placeholder="Search"
        disabled={isDisabled}
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
