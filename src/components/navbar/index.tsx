import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.logo}>
            <img src="/logo.webp" alt="logo" />
         </div>
         <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/list">Flights list</Link>
         </div>
      </nav>
   );
};

export default Navbar;
