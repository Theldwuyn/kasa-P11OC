import { render, screen } from '@testing-library/react';
import RatingStars from '../../src/components/RatingStars';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Given the RatingStars component', () => {
  test('it should render 3 red stars and 2 grey stars', () => {
    const rating = '3';
    render(<RatingStars rating={rating} />);

    const wrapper = screen.queryByTestId('stars');
    const redStars = wrapper.querySelectorAll('.red-star');
    const greyStars = wrapper.querySelectorAll('.grey-star');

    expect(redStars.length).toBe(3);
    expect(greyStars.length).toBe(2);
    redStars.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
    greyStars.forEach((elem) => {
      expect(elem).toBeInTheDocument();
    });
  });
});
