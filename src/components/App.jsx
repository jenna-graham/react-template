import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Clothing from './Clothing/Clothing.jsx';
import Accessories from './Accessories/Accessories.jsx';
import Bags from './Accessories/Bags.jsx';
import Shoes from './Accessories/Shoes.jsx';
import Jewelry from './Accessories/Jewelry.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="accessories" element={<Accessories />}>
            <Route index element={<Bags />} />
            <Route path="jewelry" element={<Jewelry />} />
            <Route path="shoes" element={<Shoes />} />
          </Route>
        </Route>
      
      </Routes>
    </Router>
  );
}
