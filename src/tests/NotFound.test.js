import React from 'react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

test('A página contém <h2> c/ texto "Page requested not found"', () => {
  const { getByText } = renderWithRouter(<NotFound />);
  expect(getByText('Page requested not found')).toBeInTheDocument();
});

test('A página exibe <img> esperada ?', () => {
  const { getByRole } = renderWithRouter(<NotFound />);
  const imgText = 'Pikachu crying because the page requested was not found';
  const imgUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  expect(getByRole('img', { name: imgText })).toHaveAttribute('src', imgUrl);
});
