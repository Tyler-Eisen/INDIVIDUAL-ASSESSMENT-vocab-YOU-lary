import client from '../utils/client';

// API CALLS FOR CARDS//

const endpoint = client.databaseURL;

// GET CARDS

const getCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getCards;
