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
    .then((data) => {
      console.warn(data);
      resolve(Object.values(data));
    })
    .catch(reject);
});

// Fiter Language Cards //
const languageCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab.json?orderBy="language"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// Filter Tech Cards//
const techCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Vocab.json?orderBy="tech"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
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

export {
  getCards,
  languageCards,
  techCards,
  getCardDetails
};
