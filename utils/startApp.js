import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import showCards from '../pages/cards';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import {
  getCards
} from '../api/cardData';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user.uid);
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  logoutButton();
  navigationEvents(user.uid);

  getCards(user.uid).then((cards) => showCards(cards));
};
export default startApp;
