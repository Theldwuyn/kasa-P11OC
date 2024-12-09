import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter as Router, Routes, Route } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';
import Logement from '../../src/pages/Logement';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';
import ErrorPage from '../../src/pages/errorPage';

const logementMockData = [
  {
    id: '1',
    title: 'Appartement',
    description: 'Petit T2 centre ville',
    location: 'Paris',
    equipments: ['Frigo', 'WIFI'],
    host: {
      name: 'Jean Michel',
      picture: '/pictureTest.png',
    },
    tags: ['Tag1', 'Tag2'],
    rating: '4',
  },
  {
    id: '2',
    title: 'Maison',
    description: 'Grande maison de campagne',
    location: 'Vierzon',
    equipments: ['Frigo', 'WIFI'],
    host: {
      name: 'Jean Pascal',
      picture: '/pictureTest.png',
    },
    tags: ['Tag1', 'Tag2'],
    rating: '3',
  },
];

const server = setupServer(
  http.get('../../data/logements.json', () => {
    return HttpResponse.json(logementMockData);
  }),
);

describe('Given the Logement page', () => {
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
    render(
      <Router initialEntries={['/logement/1']}>
        <Routes>
          <Route path="/logement/:logementId" element={<Logement />} />
        </Routes>
      </Router>,
    );

    await waitFor(() => {
      const logementTitle = screen.queryByText(/Appartement/i);
      expect(logementTitle).toBeInTheDocument();
      expect(logementTitle.textContent).toBe('Appartement');
    });
    const logementLocation = screen.queryByText(/Paris/i);
    const logementTags = screen
      .getByTestId('main-component')
      .querySelectorAll('.description__logement--tag--item');
    const hostFirstName = screen.queryByText(/Jean/i);
    const hostLastName = screen.queryByText(/Michel/i);
    const ratingRed = screen
      .getByTestId('main-component')
      .querySelectorAll('.red-star');
    const ratingGrey = screen
      .getByTestId('main-component')
      .querySelectorAll('.grey-star');

    expect(logementLocation).toBeInTheDocument();
    expect(logementLocation.textContent).toBe('Paris');

    expect(logementTags.length).toBe(2);
    for (let i = 0; i < logementTags.length; i++) {
      expect(logementTags[i]).toBeInTheDocument();
      expect(logementTags[i].textContent).toBe(logementMockData[0].tags[i]);
    }

    expect(hostFirstName).toBeInTheDocument();
    expect(hostFirstName.textContent).toBe('Jean');
    expect(hostLastName).toBeInTheDocument();
    expect(hostLastName.textContent).toBe('Michel');
    expect(hostFirstName.parentElement).toBe(hostLastName.parentElement);
    expect(hostFirstName.parentElement.tagName).toBe('P');

    expect(ratingRed.length).toBe(4);
    ratingRed.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
    expect(ratingGrey.length).toBe(1);
    ratingGrey.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
  });

  test('it should render the errorPage if the url id do not exist', async () => {
    render(
      <Router initialEntries={['/logement/3']}>
        <Routes>
          <Route path="/logement/:logementId" element={<Logement />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>,
    );
    await waitFor(() => {
      const heading = screen.queryByText(/404/i);
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe('404');
    });
  });
});
