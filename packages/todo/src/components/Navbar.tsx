import { NavLink } from "react-router-dom";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Check } from "../assets/icons/check.svg";
import styles from "../assets/styles/Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <Calendar />
      </NavLink>
      <NavLink
        to="/done"
        className={styles.link}
        activeClassName={styles.active}
      >
        <Check />
      </NavLink>
    </nav>
  );
};
