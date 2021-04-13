import { render, screen } from '@testing-library/react';
import social_app from './social';

test('renders learn react link', () => {
  render(<social_app />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
