import PropTypes from "prop-types";
import styles from "components/Input/Input.module.scss";

const Input = ({ label, placeholder, type }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        type={type ?? "text"}
        className={styles.textField}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
