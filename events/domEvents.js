import { getCardDetails } from '../api/cardData';
import viewCard from '../pages/viewCard';

// Get Card Details //
const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('view-card-btn')) {
      console.warn('VIEW CARD', e.target.id);
      console.warn(e.target.id.split('--'));
      console.warn(getCardDetails);
      const [, firebaseKey] = e.target.id.split('--');
      getCardDetails(firebaseKey).then(viewCard);
    }
  });
};

export default domEvents;
