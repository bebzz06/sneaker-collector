// "use client";
// import React from "react";
// import { IMainPageViewProps } from "./constants";
// import { NoResults } from "assets/images/NoResults";
// import { Search, Button } from "components";
// import styles from "./styles.module.css";
// import { BUTTON_OPTIONS, BUTTON_SIZE } from "components/Button/constants";
// const { btn_widescreen, main_btn, main_img, main_search, main_text, mb_large } =
//   styles;
// const SearchView: React.FC<IMainPageViewProps> = ({
//   openModal,
//   isWideScreen,
// }) => {
//   const handleOpenModal = () => {
//     if (openModal) {
//       openModal();
//     }
//   };
//   return (
//     <>
//       {isWideScreen ? (
//         <section className={main_search}>
//           <Search />
//           <Button
//             size={BUTTON_SIZE.LARGE}
//             customClass={btn_widescreen}
//             onClick={handleOpenModal}
//             text={BUTTON_OPTIONS.ADD_SNEAKERS}
//           />
//         </section>
//       ) : (
//         <section className={`${main_search} ${mb_large}`}>
//           <Search />
//         </section>
//       )}

//       <section className={main_img}>
//         <NoResults />
//       </section>
//       <section className={main_text}>
//         <p className="tc">
//           Search better. <br />
//           There is nothing like this in your collection.
//         </p>
//       </section>
//       {!isWideScreen && (
//         <section className={main_btn}>
//           <Button
//             size={BUTTON_SIZE.LARGE}
//             onClick={handleOpenModal}
//             text={BUTTON_OPTIONS.ADD_SNEAKERS}
//           />
//         </section>
//       )}
//     </>
//   );
// };

// export default SearchView;
