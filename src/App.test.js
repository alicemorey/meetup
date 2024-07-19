import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App /> component', () => {

  test('renders main components', () => {
    render(<App />);
    expect(screen.getByRole('textbox', { name: /search for a city/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/number of events/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
test('renders NumberOfEvents', () => {
  const { container } = render(<App />);
  const numberOfEventsComponent = container.querySelector('#number-of-events');
  expect(numberOfEventsComponent).toBeInTheDocument();
  });
});
