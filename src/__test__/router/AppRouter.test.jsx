import { fireEvent, render, screen } from '@testing-library/react';
import AppRouter from '../../router/AppRouter';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';
import { beforeEach } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router';

describe('Given the AppRouter', () => {
  beforeEach(() => {
    render(<AppRouter />, { wrapper: BrowserRouter });
  });
  test('it should render without crash', () => {
    expect(location.pathname).toBe('/');
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
  });
  test('it should navigate to the about page', () => {
    fireEvent.click(screen.getByText(/About/));
    expect(location.pathname).toBe('/about');
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });
  test('it should navigate to the logement page', () => {
    fireEvent.click(screen.getByText(/Logement/i));
    expect(location.pathname).toBe('/logement/1');
    expect(screen.getByText(/Logement Page/i)).toBeInTheDocument();
  });
  test('it should navigate to the error page', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <AppRouter />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
  });
});
