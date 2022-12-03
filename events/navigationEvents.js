import { getCards, languageCards, techCards } from '../api/cardData';
import showCards from '../pages/cards';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // ALL CARDS
  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards().then(showCards);
  });
  // Language Cards
  document.querySelector('#language-cards').addEventListener('click', () => {
    console.warn('CLICKED SALE BOOKS');
    languageCards().then(showCards);
  });
  // Tech Cards
  document.querySelector('#tech-cards').addEventListener('click', () => {
    console.warn('CLICKED SALE BOOKS');
    techCards().then(showCards);
  });
};
export default navigationEvents;
