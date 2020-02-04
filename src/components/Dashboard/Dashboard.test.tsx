import React from 'react';
import { render } from '@testing-library/react';
import {Dashboard} from './Dashboard'

test('renders learn react link', () => {
  const { getByText } = render(<Dashboard />);
  const paragraphElement = getByText(/Bienvenido al dashboard/i);
  expect(paragraphElement).toBeInTheDocument();
});