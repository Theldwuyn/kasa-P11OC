import { createRoutesStub, MemoryRouter } from 'react-router';
import ErrorPage from '../../src/pages/errorPage';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Given the error page', () => {
  test('it should render without crash', () => {
    const Stub = createRoutesStub([
      {
        path: '/some/bad/route',
        Component: ErrorPage,
      },
    ]);

    render(<Stub initialEntries={['/some/bad/route']} />);

    const heading = screen.getByRole('heading');
    const message = screen.getByRole('paragraph');
    const link = screen.getByText(/Retourner/i);

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('404');
    expect(message).toBeInTheDocument();
    expect(message.textContent).toBe(
      "Oups! La page que vous demandez n'existe pas.",
    );
    expect(link).toBeInTheDocument();
  });
});
