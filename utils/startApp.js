import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import showCards from '../pages/cards';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import {
  getCards, languageCards, techCards, deleteCard
} from '../api/cardData';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  languageCards();
  techCards();
  logoutButton();
  navigationEvents();
  deleteCard();
  formEvents();
  getCards().then((cards) => showCards(cards));
};
export default startApp;
