"use client";
import styles from "./styles.module.css";
//components
import {
  Search,
  Button,
  InputSelect,
  SneakerCard,
  SortBy,
  SearchResults,
} from "components";
//assets
import { NoResults } from "assets/images";
//state
import { useNotifyModalContext } from "lib/NotifyModalContext";
import { useSneakersContext } from "lib/SneakersContext";
//constants
import { BUTTON_OPTIONS, BUTTON_SIZE } from "components/Button/constants";

const {
  btn_widescreen,
  main_btn,
  main_search,
  btn_fixed,
  main_select,
  main_sneaker_cards,
  main_sort_by,
  wide_screen,
  small_screen,
  main_no_results_container,
  main_text,
  main_search_results,
} = styles;

const SneakersView: React.FC = () => {
  const { sneakers, isSearchDisabled, brandCounts } = useSneakersContext();
  const { toggleModalDisplay } = useNotifyModalContext();

  const areResultsFound = sneakers.length > 0;
  return (
    <>
      <section className={`${main_search} ${wide_screen}`}>
        <Search isDisabled={isSearchDisabled} />
        <Button
          size={BUTTON_SIZE.LARGE}
          customClass={btn_widescreen}
          onClick={() => toggleModalDisplay()}
          text={BUTTON_OPTIONS.ADD_SNEAKERS}
        />
      </section>
      {brandCounts && (
        <section className={`${main_search_results} ${wide_screen}`}>
          <SearchResults />
        </section>
      )}
      <section className={`${main_sort_by} ${wide_screen}`}>
        <SortBy />
      </section>

      <section className={`${main_select} ${small_screen}`}>
        <InputSelect />
      </section>
      <section className={`${main_search} ${small_screen}`}>
        <Search isDisabled={isSearchDisabled} />
      </section>

      {brandCounts && (
        <section className={`${main_search_results} ${small_screen}`}>
          <SearchResults />
        </section>
      )}

      {areResultsFound ? (
        <>
          <section className={main_sneaker_cards}>
            {sneakers?.map((sneaker) => (
              <SneakerCard
                name={sneaker.name}
                brand={sneaker.brand}
                price={sneaker.price}
                sizeUs={sneaker.sizeUs}
                year={sneaker.year}
                _id={sneaker._id}
                key={sneaker._id}
                editSneaker={() => toggleModalDisplay()}
              />
            ))}
          </section>
        </>
      ) : (
        <>
          <section className={main_no_results_container}>
            <NoResults />
          </section>
          <section className={main_text}>
            <p className="tc">
              Search better. <br />
              There is nothing like this in your collection.
            </p>
          </section>
        </>
      )}

      <section className={`${main_btn} ${btn_fixed} ${small_screen}`}>
        <Button
          size={BUTTON_SIZE.LARGE}
          onClick={() => toggleModalDisplay()}
          text={BUTTON_OPTIONS.ADD_SNEAKERS}
        />
      </section>
    </>
  );
};

export default SneakersView;
