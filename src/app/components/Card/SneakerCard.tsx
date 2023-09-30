"use client";
import { TrashIcon } from "components/Button/icons";
import styles from "./styles.module.css";
import { ISneaker } from "main/constants";
import { deleteSneaker } from "lib/fetchSneakers";
import { useNotifyModalContext } from "lib/NotifyModalContext";
import { useSneakersContext } from "lib/SneakersContext";

interface ISneakerCardProps extends ISneaker {
  editSneaker: () => void;
}

const {
  card_brand,
  card_container,
  card_name,
  card_header,
  card_details,
  trash_icon,
  card_year,
  card_size,
  card_price,
  subhead,
} = styles;
const SneakerCard: React.FC<ISneakerCardProps> = ({
  name,
  brand,
  price,
  sizeUs,
  year,
  _id,
  editSneaker,
}) => {
  const { onRemoveSneaker, handleSetSelectedSneaker } = useSneakersContext();
  const { showLoading, hideLoading, showError } = useNotifyModalContext();
  const handleRemoveSneaker = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      showLoading();
      deleteSneaker(_id);
    } catch (error) {
      console.log(error);
      showError();
    } finally {
      hideLoading();
      onRemoveSneaker(_id);
    }
  };
  const handleEditSneaker = () => {
    editSneaker();
    handleSetSelectedSneaker({ name, brand, price, sizeUs, year, _id });
  };
  return (
    <div className={card_container} onClick={handleEditSneaker}>
      <div className={card_header}>
        <h3 className={card_name}>{name}</h3>
        <TrashIcon onClick={handleRemoveSneaker} className={trash_icon} />
        <span className={card_brand}>{brand}</span>
      </div>
      <div className={card_details}>
        <div className={card_year}>
          <p className={subhead}>{year}</p>
          <p>Year</p>
        </div>
        <div className={card_size}>
          <p className={subhead}>{sizeUs}US</p>
          <p>Size</p>
        </div>
        <div className={card_price}>
          <p className={subhead}>${price}</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
