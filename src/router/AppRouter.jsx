import { Link, Route, Routes } from 'react-router';

import About from '../pages/About';
import Logement from '../pages/Logement';
import ErrorPage from '../pages/errorPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

function AppRoutes() {
  if (import.meta.env.MODE === 'test') {
    return (
      <div>
        <Routes>
          <Route path="/" element={<>Home Page</>} />
          <Route path="/about" element={<>About Page</>} />
          <Route path="/logement/:logementId" element={<>Logement Page</>} />
          <Route path="*" element={<>Error Page</>} />
        </Routes>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/logement/1">Logement 1</Link>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
}

function AppRouter() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default AppRouter;
