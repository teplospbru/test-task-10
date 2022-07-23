import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';

test('renders onload', () => {
  render(<App />);

  expect(screen.getAllByTestId('search-input')).toBeInTheDocument();
  expect(screen.getAllByTestId('search-btn')).toBeInTheDocument();
  expect(screen.getAllByText(/loading/i)).toBeInTheDocument();
});
