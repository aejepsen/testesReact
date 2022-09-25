import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

test('1) O componente possui tag <h2> e o texto "Encountered pokémons" ?', () => {
  const { getByText } = renderWithRouter(<App />);
  getByText(/Encountered pokémons/i);
});

test('2) Após o click é exibido o próximo Pokemon ? ', () => {
  const { getByTestId, getByRole } = renderWithRouter(<App />);
  pokemons.forEach((pokemon) => {
    expect(getByTestId('pokemon-name')).toHaveTextContent(pokemon.name);
    userEvent.click(getByRole('button', { name: 'Próximo pokémon' }));
  });
});

test('3) É mostrado apenas um pokemon/vez ? ', () => {
  const { getByRole } = renderWithRouter(<App />);
  expect(getByRole('img')).toBeInTheDocument();
});

test('4) A Pokédex tem os botões de filtro ? ', () => {
  const { getAllByTestId, getByRole } = renderWithRouter(<App />);
  expect(getAllByTestId('pokemon-type-button')).toHaveLength(pokemons.length - 2);
  pokemons.forEach((btn) => {
    expect(getByRole('button', { name: btn.type })).toHaveTextContent(btn.type);
  });
});

test('5) A Pokédex tem um botão p/ reset ? ', () => {
  const { getByText, getByRole } = renderWithRouter(<App />);
  userEvent.click(getByRole('button', { name: /All/i }));
  expect(getByText(/Pikachu/i)).toBeInTheDocument();
  userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
  expect(getByText(/Charmander/i)).toBeInTheDocument();
});
