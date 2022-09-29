import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Home</NavLink>
      <NavLink to="accessories">Accessories</NavLink>
      <NavLink to="clothing">Clothing</NavLink>
    </nav>
  );
}
