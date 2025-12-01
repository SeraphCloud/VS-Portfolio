import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header logo', () => {
  render(<App />);
  const logoElement = screen.getByText('<VS />');
  expect(logoElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heroTitle = screen.getByText('Victor A. Silva');
  expect(heroTitle).toBeInTheDocument();
});

test('renders navigation items', () => {
  render(<App />);
  const navItem = screen.getByText('Início');
  expect(navItem).toBeInTheDocument();
});
