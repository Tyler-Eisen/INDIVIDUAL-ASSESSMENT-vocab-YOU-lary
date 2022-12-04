import { createCard, updateCard, getCards } from '../api/cardData';
import showCards from '../pages/cards';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING CARD
    if (e.target.id.includes('submit-card-btn')) {
      console.warn('CLICKED SUBMIT CARD', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,

      };
      createCard(payload).then(({ name }) => {
        console.warn(name);
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards().then(showCards);
        });
      });
    }
  });
};
export default formEvents;
