import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import Home from '../../pages/Home';
import { afterAll, beforeAll, expect, vi } from 'vitest';
import { BrowserRouter, createRoutesStub } from 'react-router';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';
import { act } from 'react';

const logementMockData = [
  {
    id: 1,
    title: 'Appartement',
    cover: '/coverTest.png',
  },
  {
    id: 2,
    title: 'Maison',
    cover: '/coverTest.png',
  },
];

const server = setupServer(
  http.get('http://localhost:3000/data/logements.json', () => {
    return HttpResponse.json(logementMockData);
  }),
);

const serverWithError = setupServer(
  http.get('http://localhost:3000/data/apropos.json', () => {
    return new HttpResponse(null, { status: 400 });
  }),
);

describe('Given the Home page', () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test('it should render without crash', async () => {
    vi.useFakeTimers();

    const Stub = createRoutesStub([
      {
        path: '/',
        Component: Home,
      },
    ]);

    render(<Stub initialEntries={['/']} />);
    await act(async () => vi.advanceTimersByTime(50));

    vi.clearAllTimers();
    vi.useRealTimers();

    const bannerText = screen.queryByRole('heading', { level: 1 });
    const bannerImg = screen.queryByAltText('banner');
    const firstLogementLabel = screen.queryByText(/Appartement/);
    const secondLogementLabel = screen.queryByText(/Maison/);

    expect(bannerText).toBeInTheDocument();
    expect(bannerText.textContent).toMatch(/Chez vous/i);
    expect(bannerImg).toBeInTheDocument();
    expect(firstLogementLabel).toBeInTheDocument();
    expect(secondLogementLabel).toBeInTheDocument();
  });
});

describe('Given the Home page with fail fetch', () => {
  beforeAll(() => {
    serverWithError.listen({ onUnhandledRequest: 'error' });
  });
  afterEach(() => {
    serverWithError.resetHandlers();
  });
  afterAll(() => {
    serverWithError.close();
  });

  test('it should render an error message', async () => {
    vi.useFakeTimers();

    const Stub = createRoutesStub([
      {
        path: '/',
        Component: Home,
      },
    ]);

    render(<Stub initialEntries={['/']} />);
    await act(async () => vi.advanceTimersByTime(50));

    vi.clearAllTimers();
    vi.useRealTimers();

    const errorMessage = screen.queryByRole('heading');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe(
      'Oups, nous ne parvenons pas à récupérer les données des logements',
    );
  });
});
