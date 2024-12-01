import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import AppRouter from './components/AppRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter>
      <div>KASA</div>
    </AppRouter>
  </StrictMode>,
);
