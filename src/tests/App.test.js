import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const { getAllByRole } = renderWithRouter(<App />);
const hAL = getAllByRole('link', { name: /Home/i });
const aAL = getAllByRole('link', { name: /About/i });
const fAL = getAllByRole('link', { name: /Favorite Pokémons/i });

test('A aplicação é renderizada com o conjunto de links ?', () => {
  const link = [hAL, aAL, fAL];
  link.forEach((l) => {
    expect(l.length).toBe(1);
  });
});

test('É redirecionada para a URL `/` qdo click em "Home"', () => {
  const { history, getByRole } = renderWithRouter(<App />);
  const hL = getByRole('link', { name: /Home/i });
  userEvent.click(hL);
  expect(history.location.pathname).toBe('/');
});

test('É redirecionada para a URL `/about` qdo click em "About"', () => {
  const { history, getByRole } = renderWithRouter(<App />);
  const aL = getByRole('link', { name: /About/i });
  userEvent.click(aL);
  expect(history.location.pathname).toBe('/about');
});

test('É redirecionada para a URL `/favorites` qdo click em "Favorite Pokémons"', () => {
  const { history, getByRole } = renderWithRouter(<App />);
  const fL = getByRole('link', { name: /Favorite Pokémons/i });
  userEvent.click(fL);
  expect(history.location.pathname).toBe('/favorites');
});

test('É redirecionada para página `/notFound` qdo URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/notFound');
  expect(history.location.pathname).toBe('/notFound');
});
