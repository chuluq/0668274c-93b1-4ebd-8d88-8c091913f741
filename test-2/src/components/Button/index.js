import PropTypes from "prop-types";
import styles from "components/Button/Button.module.scss";

const Button = ({ title, outline }) => {
  return (
    <button className={outline ? styles.btnOutline : styles.btn}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  outline: PropTypes.bool,
};

export default Button;
