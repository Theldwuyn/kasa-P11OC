import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter>
        <div>KASA</div>
      </AppRouter>
    </BrowserRouter>
  </StrictMode>,
);
