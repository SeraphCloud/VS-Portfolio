import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon component', () => {
  test('renders without crashing', () => {
    render(<Icon name="github" />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
  });

  test('has correct aria-label', () => {
    render(<Icon name="github" />);
    const svgElement = screen.getByLabelText('Github icon');
    expect(svgElement).toBeInTheDocument();
  });

  test('accepts custom ariaLabel', () => {
    render(<Icon name="github" ariaLabel="My Github" />);
    const svgElement = screen.getByLabelText('My Github');
    expect(svgElement).toBeInTheDocument();
  });

  test('returns null for invalid name', () => {
    render(<Icon name="invalid" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
