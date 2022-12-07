import client from '../utils/client';

// API CALLS FOR CARDS//

const endpoint = client.databaseURL;

// GET CARDS

const getCards = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab.json?orderBy="uid"&equalTo="${userId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn(data);
      resolve(Object.values(data));
    })
    .catch(reject);
});

// Fiter Language Cards //
const languageCards = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab.json?orderBy="uid"&equalTo="${userId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data).filter((item) => item.category === 'Language')))
    .catch(reject);
});

// Filter Tech Cards//
const techCards = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab.json?orderBy="uid"&equalTo="${userId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data).filter((item) => item.category === 'Tech')))
    .catch(reject);
});

// Get Single Card //
const getCardDetails = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Create a New Card //
const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Update a Card//
const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
// Delete Card
const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'applications/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getCards,
  languageCards,
  techCards,
  getCardDetails,
  createCard,
  updateCard,
  deleteCard
};
