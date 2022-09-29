import { Outlet, Link } from 'react-router-dom';
import styles from './Accessories.css';


export default function Accessories() {
  return (
    <div className={styles.Accessories}>
      <h1>Accessories</h1>
      <nav className={styles.AccNav}>
        <Link to="">Bags</Link>
        <Link to="jewelry">Jewelry</Link>
        <Link to="shoes">Shoes</Link>
      </nav>
      <Outlet />
    </div>
  );
}
