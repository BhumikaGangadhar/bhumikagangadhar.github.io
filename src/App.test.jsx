import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('shows Bhumika’s experience, skills and education', () => {
  render(<App />);
  const timeline = document.getElementById('experience');
  ['Robosoft Technologies', 'Continental Automotive', 'Nexteer Automotive'].forEach(company => {
    expect(within(timeline).getByRole('heading', { name: company })).toBeInTheDocument();
  });
  expect(within(timeline).getByText('Current')).toBeInTheDocument();
  expect(document.getElementById('education')).toHaveTextContent('Bangalore Institute of Technology');
  expect(document.getElementById('skills')).toHaveTextContent('ISO 26262');
});

test('local navigation links resolve and contact details are Bhumika’s', () => {
  render(<App />);
  const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  screen.getAllByRole('link').filter(link => link.getAttribute('href').startsWith('#')).forEach(link => {
    expect(document.getElementById(link.getAttribute('href').slice(1))).not.toBeNull();
  });
  expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /bhumibhanu23@gmail.com/ })).toHaveAttribute('href', 'mailto:bhumibhanu23@gmail.com');
  expect(screen.getByRole('link', { name: '+91 81471 02354' })).toHaveAttribute('href', 'tel:+918147102354');
});
