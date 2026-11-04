import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('shows the supplied experience, current employer, education and development focus', () => {
  render(<App />);
  const timeline = document.getElementById('erfahrung');
  ['Kupper IT GmbH', 'Fraunhofer IBP', 'Hochschule Mittweida', 'IAV GmbH', 'Mentopolis CSC GmbH', 'Codefelix Technologies'].forEach(company => {
    expect(within(timeline).getByRole('heading', { name: company })).toBeInTheDocument();
  });
  expect(within(timeline).getByText('Aktuell')).toBeInTheDocument();
  expect(document.getElementById('arbeitsweise')).toHaveTextContent('Claude Code und Codex');
  expect(document.getElementById('ausbildung')).toHaveTextContent('Okt. 2021 — Apr. 2025');
  expect(document.getElementById('ausbildung')).toHaveTextContent('Okt. 2016 — Mai 2019');
});

test('every local navigation link resolves to a unique destination', () => {
  render(<App />);
  const allIds = [...document.querySelectorAll('[id]')].map(element => element.id);
  expect(new Set(allIds).size).toBe(allIds.length);
  screen.getAllByRole('link').filter(link => link.getAttribute('href').startsWith('#')).forEach(link => {
    expect(document.getElementById(link.getAttribute('href').slice(1))).not.toBeNull();
  });
  expect(screen.getByRole('navigation', { name: 'Hauptnavigation' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Zum Inhalt springen' })).toHaveAttribute('href', '#main');
});

test('provides working contact targets and an accessible portrait', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /karnatishivakrishna@gmail.com/ })).toHaveAttribute('href', 'mailto:karnatishivakrishna@gmail.com');
  expect(screen.getByRole('link', { name: '+49 1766 520 7147' })).toHaveAttribute('href', 'tel:+4917665207147');
  expect(screen.getByRole('link', { name: /GitHub ansehen/ })).toHaveAttribute('href', 'https://github.com/shivakarnati');
  expect(screen.getByRole('img', { name: /Porträt von Shivakrishna Karnati/ })).toBeInTheDocument();
});
