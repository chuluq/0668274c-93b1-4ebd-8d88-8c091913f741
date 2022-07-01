import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { links } from "contants/links";
import Button from "components/Button";
import styles from "components/Navbar/Navbar.module.scss";

const Navbar = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>KeDA</h1>
        </Link>
      </div>
      {pathname !== "/account/login" && (
        <nav
          className={isMenuOpen ? `${styles.nav} ${styles.active}` : styles.nav}
        >
          {links.map((link) => {
            return (
              <HashLink
                key={link.id}
                smooth
                to={link.url}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.name}</span>
              </HashLink>
            );
          })}
          <Link to="/account/login" className={styles.loginBtn}>
            <Button title="Login" outline={true} />
          </Link>
        </nav>
      )}
      <div className={styles.menu} onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Navbar;
