import { render } from '@testing-library/react';
import Footer from '../../components/Footer';
import { screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Given the Footer component', () => {
  test('it should render image and content', () => {
    render(<Footer />);
    const img = screen.getByRole('img');
    const text = screen.getByText(/© 2020/i);
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('http://localhost:3000/src/assets/logo_white.svg');
    expect(text).toBeInTheDocument();
  });
});
