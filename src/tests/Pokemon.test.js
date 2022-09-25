import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('É renderizado um card com info do Pokémon', () => {
  const { getByText, getByTestId, getByAltText } = renderWithRouter(<App />);
  expect(getByText(/Pikachu/i)).toHaveTextContent(/Pikachu/i);
  expect(getByTestId('pokemon-type')).toHaveTextContent(/Electric/i);
  expect(getByText(/Average weight: 6.0 kg/i))
    .toHaveTextContent(/Average weight: 6.0 kg/i);
  expect(getByAltText('Pikachu sprite'))
    .toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('Card contém o Link de navegação ?', () => {
  const { history, getByRole } = renderWithRouter(<App />);
  userEvent.click(getByRole('link', { name: 'More details' }));
  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');
});

test('O ícone da <img src="star-icon.svg"/> é exibido quando favoritado ?', () => {
  const { getByAltText, getByText, getByRole } = renderWithRouter(<App />);
  userEvent.click(getByRole('link', { name: 'More details' }));
  userEvent.click(getByText(/Pokémon favoritado?/i));
  expect(getByAltText('Pikachu is marked as favorite'))
    .toHaveAttribute('src', '/star-icon.svg');
});
