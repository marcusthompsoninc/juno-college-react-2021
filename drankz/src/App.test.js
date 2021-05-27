import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name', () => {
  render(<App />);
  const myName = screen.getByText("Marcus Thompson");
  expect(myName).toBeInTheDocument();
});
