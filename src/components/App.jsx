import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      
      </Routes>
    </Router>
  );
}
