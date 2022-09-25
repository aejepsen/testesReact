import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';

test('Sem favoritos print "No favorite pokemon found"', () => {
  const { getByText } = renderWithRouter(<FavoritePokemons />);
  expect(getByText('No favorite pokemon found')).toBeInTheDocument();
});

test('Favoritos é exibido e tem conteúdo', () => {
  const { getByText, getByLabelText } = renderWithRouter(<App />);
  const moreDetails = getByText('More details');
  userEvent.click(moreDetails);
  const favPokemons = getByLabelText('Pokémon favoritado?');
  userEvent.click(favPokemons);
  expect(getByText('Pokémon favoritado?')).toBeInTheDocument();
});
