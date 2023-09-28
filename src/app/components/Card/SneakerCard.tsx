"use client";
import TrashIcon from "./TrashIcon";
import styles from "./styles.module.css";
import { ISneaker } from "main/constants";
import { deleteSneaker } from "lib/fetchSneakers";
import { useNotifyModalContext } from "lib/NotifyModalContext";
import { useSneakersContext } from "lib/SneakersContext";

interface ISneakerCardProps extends ISneaker {}

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
  size,
  year,
  _id,
}) => {
  const { onRemoveSneaker } = useSneakersContext();
  const { showLoading, hideLoading, showError } = useNotifyModalContext();
  const removeSneaker = async () => {
    try {
      showLoading();
      deleteSneaker(_id);
      //fecth again?
    } catch (error) {
      console.log(error);
      showError();
    } finally {
      hideLoading();
      onRemoveSneaker(_id);
    }
  };
  return (
    <div className={card_container}>
      <div className={card_header}>
        <h3 className={card_name}>{name}</h3>
        <TrashIcon onClick={removeSneaker} className={trash_icon} />
        <span className={card_brand}>{brand}</span>
      </div>
      <div className={card_details}>
        <div className={card_year}>
          <p className={subhead}>{year}</p>
          <p>Year</p>
        </div>
        <div className={card_size}>
          <p className={subhead}>{size}US</p>
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
