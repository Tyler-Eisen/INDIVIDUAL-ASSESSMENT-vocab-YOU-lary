import { getCardDetails, deleteCard, getCards } from '../api/cardData';
import viewCard from '../pages/viewCard';
import addCardForm from '../components/Forms/addCardForm';
import showCards from '../pages/cards';

const domEvents = (userId) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Get Card Details //
    if (e.target.id.includes('view-card-btn')) {
      console.warn('VIEW CARD', e.target.id);
      console.warn(e.target.id.split('--'));
      console.warn(getCardDetails);
      const [, firebaseKey] = e.target.id.split('--');
      getCardDetails(firebaseKey).then(viewCard);
    }
    // Form for adding a Card //
    if (e.target.id.includes('add-card')) {
      console.warn('ADD CARD');
      addCardForm();
    }
    //  Form for Updating a Card
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getCardDetails(firebaseKey).then((word) => addCardForm(word));
    }
    //  CLICK EVENT FOR DELETING A CARD
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE CARD', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(userId).then(showCards);
        });
      }
    }
  });
};

export default domEvents;
