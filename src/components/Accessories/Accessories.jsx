import { Outlet, Link } from 'react-router-dom';

export default function Accessories() {
  return (
    <div>
      <h1>Accessories</h1>
      <nav>
        <Link to="">Bags</Link>
        <Link to="jewelry">Jewelry</Link>
        <Link to="shoes">Shoes</Link>
      </nav>
      <Outlet />
    </div>
  );
}
