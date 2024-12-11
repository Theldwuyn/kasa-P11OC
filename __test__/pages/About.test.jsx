import { createRoutesStub } from 'react-router';
import About from '../../src/pages/About';
import { screen, render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Give the About page', () => {
  test('it should render without crash', () => {
    const Stub = createRoutesStub([
      {
        path: '/about',
        Component: About,
      },
    ]);

    render(<Stub initialEntries={['/about']} />);

    const heading = screen.queryByRole('heading', { level: 1 });
    const bannerImg = screen.queryByAltText('banner');
    const dropdownLabels = screen.queryAllByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('À propos');

    expect(bannerImg).toBeInTheDocument();
    expect(dropdownLabels.length).toBe(4);
    dropdownLabels.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
  });
});
