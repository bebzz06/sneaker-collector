import axios from "axios";
import TrashIcon from "./TrashIcon";
import styles from "./styles.module.css";

interface ISneakerCardProps {
  _id: string;
  name: string;
  brand: string;
  price: number;
  size: number;
  year: number;
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
  size,
  year,
  _id,
}) => {
  const deleteSneaker = async () => {
    //loading?
    try {
      const url = `${process.env.NEXT_PUBLIC_SNEAKERS_APP_ENDPOINT}/${_id}`;
      axios.delete(url);
      //update state, so that the useEffect updates itself.
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={card_container}>
      <div className={card_header}>
        <h3 className={card_name}>{name}</h3>
        <TrashIcon onClick={deleteSneaker} className={trash_icon} />
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
