import { BrowserRouter, Route, Routes } from 'react-router';

import About from '../../pages/About/About';
import Logement from '../../pages/Logement/Logement';
import ErrorPage from '../../pages/errorPage/errorPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home/Home';

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
