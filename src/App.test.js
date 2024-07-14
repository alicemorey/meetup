import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App /> component', () => {
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  });

test('renders NumberOfEvents', () => {
  const { container } = render(<App />);
  const numberOfEventsComponent = container.querySelector('#number-of-events');
  expect(numberOfEventsComponent).toBeInTheDocument();
  });
});
