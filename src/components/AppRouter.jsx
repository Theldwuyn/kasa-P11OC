import { BrowserRouter, Route, Routes } from 'react-router';

import About from '../pages/About';
import Logement from '../pages/Logement';
import ErrorPage from '../pages/errorPage';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
