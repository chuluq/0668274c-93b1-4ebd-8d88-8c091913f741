import PropTypes from "prop-types";
import styles from "components/Card/Card.module.scss";

const Card = ({ pricingName, pricingValue, pricingDesc }) => {
  return (
    <div className={styles.price}>
      <h3 className={styles.priceHeader}>{pricingName}</h3>
      <p className={styles.priceValue}>{pricingValue}</p>
      {pricingDesc.map((desc) => {
        return <p key={desc.id}>{desc.text}</p>;
      })}
      <p className={styles.priceBtn}>Subscribe now</p>
    </div>
  );
};

Card.propTypes = {
  pricingName: PropTypes.string.isRequired,
  pricingValue: PropTypes.string.isRequired,
  pricingDesc: PropTypes.array.isRequired,
};

export default Card;
