import { render, screen } from '@testing-library/react';
import LogementCard from '../../src/components/LogementCard.jsx';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Given the LogementCard component', () => {
  test('it should render an image and a title', () => {
    render(<LogementCard title="Title test" picture="/pictureTest.png" />);
    const img = screen.getByRole('img');
    const text = screen.getByText(/Title/i);
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('http://localhost:3000/pictureTest.png');
    expect(text).toBeInTheDocument();
  });
});
