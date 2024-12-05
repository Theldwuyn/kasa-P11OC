import { render, screen } from '@testing-library/react';
import DropdownContent from '../../../components/dropdown/DropdownContent';
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

describe('Given the DropdownContent component', () => {
  test('it should render a paragraph', () => {
    const text = 'Paragraphe de test';
    render(<DropdownContent isShown={false} content={text} />);

    const p = screen.getByRole('paragraph');
    const list = screen.queryByRole('list');

    expect(p).toBeTruthy();
    expect(p.textContent).toContain(text);
    expect(list).toBeNull();
  });
  test('it should render a list', () => {
    const listTest = ['item1', 'item2', 'item3'];
    render(<DropdownContent isShown={false} content={listTest} />);

    const ul = screen.queryByRole('list');
    const li = screen.queryAllByRole('listitem');
    const p = screen.queryByRole('paragraph');

    expect(ul).toBeInTheDocument();
    for (let i = 0; i < li.length; i++) {
      expect(ul.contains(li[i])).toBeTruthy();
      expect(li[i].textContent).toBe(listTest[i]);
    }
    expect(p).toBeNull();
  });
});
