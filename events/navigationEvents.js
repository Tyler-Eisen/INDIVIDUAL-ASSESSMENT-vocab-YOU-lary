import getCards from '../api/cardData';
import { showCards } from '../api/cards';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // ALL CARDS
  document.querySelector('#all-books').addEventListener('click', () => {
    getCards().then(showCards);
  });
};
export default navigationEvents;
