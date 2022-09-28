import { Outlet } from 'react-router-dom';
import styles from './Layout.css';
import Header from './Header.jsx';
// import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>
        <Outlet />
     
      </main>
    </div>
  );
}
