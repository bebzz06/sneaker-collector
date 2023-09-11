"use client";
import IconSearch from "./IconSearch";
import styles from "./styles.module.css";

const { input_search_container, ml_8 } = styles;
const Search = () => {
  return (
    <div className={input_search_container}>
      <IconSearch />
      <input className={ml_8} type="search" placeholder="Search" />
    </div>
  );
};

export default Search;
