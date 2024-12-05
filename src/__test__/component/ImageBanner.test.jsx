import { render, screen } from '@testing-library/react';
import ImageBanner from '../../components/ImageBanner';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Given the ImageBanner component', () => {
  test('it should render an image and a text', () => {
    render(<ImageBanner label="Label test" picture="/pictureTest.png" />);
    const img = screen.getByRole('img');
    const text = screen.getByText(/Label/i);
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('http://localhost:3000/pictureTest.png');
    expect(text).toBeInTheDocument();
  });
  test('it should render with an image and no text', () => {
    render(<ImageBanner picture="/pictureTest.png" />);
    const img = screen.getByRole('img');
    const text = screen.queryByText(/\w/);
    expect(img.src).toBe('http://localhost:3000/pictureTest.png');
    expect(text).toBeNull();
  });
});
