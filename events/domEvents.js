import { getCardDetails } from '../api/cardData';
import viewCard from '../pages/viewCard';
import addCardForm from '../components/Forms/addCardForm';

const domEvents = () => {
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
    if (e.target.id.includes('add-card-btn')) {
      console.warn('ADD CARD');
      addCardForm();
    }
    //  Form for Updating a Card
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getCardDetails(firebaseKey).then((word) => addCardForm(word));
    }
  });
};

export default domEvents;
