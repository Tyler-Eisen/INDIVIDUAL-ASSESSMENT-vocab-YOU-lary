import { getCards, languageCards, techCards } from '../api/cardData';
import showCards from '../pages/cards';
import { signOut } from '../utils/auth';

const navigationEvents = (userId) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // ALL CARDS
  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(userId).then(showCards);
  });
  // Language Cards
  document.querySelector('#language-cards').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    languageCards(userId).then(showCards);
  });
  // Tech Cards
  document.querySelector('#tech-cards').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    techCards(userId).then(showCards);
  });
};
export default navigationEvents;
