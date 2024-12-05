import { fireEvent, render, screen } from '@testing-library/react';
import DropdownWrapper from '../../../components/dropdown/DropdownWrapper';
import { beforeEach } from 'vitest';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Given the DropdownWrapper component', () => {
  const text = 'Paragraphe de test';
  const label = 'Test';
  let h2, p, icon;

  beforeEach(() => {
    render(<DropdownWrapper label={label} content={text} />);

    h2 = screen.queryByRole('heading');
    p = screen.queryByRole('paragraph');
    icon = screen.queryByTitle(label).parentElement;
  });

  test('it should render without crash', () => {
    expect(h2.tagName).toBe('H2');
    expect(h2.textContent).toBe(label);
    expect(h2.classList.toString()).not.toContain('show');
    expect(h2).toBeInTheDocument();

    expect(p.textContent).toBe(text);
    expect(p.parentElement.classList.toString()).not.toContain('show');
    expect(p).toBeInTheDocument();

    expect(icon.classList.toString()).toContain('fa-chevron-up');
    expect(icon.classList.toString()).not.toContain('rotate');
    expect(icon).toBeInTheDocument();
  });
  test('it should toggle show and rotate classes when user click on the icon', () => {
    fireEvent.click(icon);

    expect(h2.classList.toString()).toContain('show');
    expect(h2).toBeInTheDocument();

    expect(p.parentElement.classList.toString()).toContain('show');
    expect(p).toBeInTheDocument();

    expect(icon.classList.toString()).toContain('rotate');
    expect(icon).toBeInTheDocument();
  });

  test('it should toggle show and rotate classes when user click on the label', () => {
    fireEvent.click(h2);

    expect(h2.classList.toString()).toContain('show');
    expect(h2).toBeInTheDocument();

    expect(p.parentElement.classList.toString()).toContain('show');
    expect(p).toBeInTheDocument();

    expect(icon.classList.toString()).toContain('rotate');
    expect(icon).toBeInTheDocument();
  });
});
