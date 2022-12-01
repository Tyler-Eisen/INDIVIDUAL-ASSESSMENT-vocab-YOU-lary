import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import getCards from '../api/cardData';
import showCards from '../api/cards';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents();
  getCards().then((cards) => showCards(cards));
};
export default startApp;
