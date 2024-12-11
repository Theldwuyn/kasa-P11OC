import { render, screen } from '@testing-library/react';
import LogementDescription from '../../src/components/LogementDescription';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

const label = 'Appartement test';
const location = 'Paris 16e';
const tags = ['tag1', 'tag2'];
const host = {
  name: 'Jean Michel',
  picture: '/pictureTesT.png',
};
const rating = '4';

describe('Given the LogementDescription component', () => {
  test('it should render all current logement informations', () => {
    render(
      <LogementDescription
        label={label}
        location={location}
        host={host}
        tags={tags}
        rating={rating}
      />,
    );
    const logementTitle = screen.queryByText(/Appartement/i);
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

    expect(logementTitle).toBeInTheDocument();
    expect(logementTitle.textContent).toBe('Appartement test');

    expect(logementLocation).toBeInTheDocument();
    expect(logementLocation.textContent).toBe('Paris 16e');

    expect(logementTags.length).toBe(2);
    for (let i = 0; i < logementTags.length; i++) {
      expect(logementTags[i]).toBeInTheDocument();
      expect(logementTags[i].textContent).toBe(tags[i]);
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
});
