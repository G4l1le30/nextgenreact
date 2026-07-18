import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders NexGen navbar brand', () => {
  render(<App />);
  const brand = screen.getByText('NexGen');
  expect(brand).toBeInTheDocument();
});
