import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Pokédex Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});
