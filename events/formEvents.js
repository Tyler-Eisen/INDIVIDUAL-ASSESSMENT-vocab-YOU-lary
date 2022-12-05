import { createCard, updateCard, getCards } from '../api/cardData';
import showCards from '../pages/cards';

const formEvents = (userId) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING CARD
    if (e.target.id.includes('submit-card')) {
      console.warn('CLICKED SUBMIT CARD', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        uid: userId,
      };
      createCard(payload).then(({ name }) => {
        console.warn(name);
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(userId).then(showCards);
        });
      });
    }
    // For UPDATING A CARD
    if (e.target.id.includes('update-card')) {
      console.warn('CLICKED UPDATE CARD', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        firebaseKey,
      };
      console.warn(payload);
      updateCard(payload).then(() => {
        getCards(userId).then(showCards);
      });
    }
  });
};
export default formEvents;
