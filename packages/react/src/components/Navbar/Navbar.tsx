import { NavLink } from "react-router-dom";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import styles from "../../assets/styles/Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <span className="sr-only">active todos</span>
        <Calendar className={styles.icon} />
      </NavLink>
      <NavLink
        to="/done"
        className={styles.link}
        activeClassName={styles.active}
      >
        <span className="sr-only">done todos</span>
        <Check className={styles.icon} />
      </NavLink>
    </nav>
  );
};
