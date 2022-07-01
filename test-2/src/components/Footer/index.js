import { Link } from "react-router-dom";
import styles from "components/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link to="/">
          <h6>KeDA</h6>
        </Link>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
