import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

test('A página contém informação sobre Pokemon em dois <p>', () => {
  renderWithRouter(<About />);
  const aboutParagraph1 = screen.getByText(/this/i);
  const aboutParagraph2 = screen.getByText(/one/i);
  expect(aboutParagraph1).toBeInTheDocument();
  expect(aboutParagraph2).toBeInTheDocument();
});

test('A página contém <h1> com Pokédex', () => {
  renderWithRouter(<About />);
  const aboutH1 = screen.getByRole('heading', { name: /pokédex/i });
  expect(aboutH1).toBeInTheDocument();
});

test('A página contém <h2> com About Pokédex', () => {
  renderWithRouter(<About />);
  const aboutTitle = screen.getByRole('heading', { name: /About Pokédex/i });
  expect(aboutTitle).toBeInTheDocument();
});

test('A página contém <img> Pokedéx', () => {
  renderWithRouter(<About />);
  const aboutImage = screen.getByAltText(/pokédex/i);
  expect(aboutImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
