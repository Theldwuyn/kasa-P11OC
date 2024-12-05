import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Header from '../../components/Header';
import { createRoutesStub } from 'react-router';

describe('Given the header component', () => {
  test('it should render correctly', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    render(<Stub initialEntries={['/']} />);
    const img = screen.getByRole('img');
    const homeLink = screen.getByText(/Accueil/);
    const aboutLink = screen.getByText(/À propos/);
    expect(img.src).toBe('http://localhost:3000/src/assets/LOGO.svg');
    expect(homeLink).toBeTruthy();
    expect(aboutLink).toBeTruthy();
  });
});
