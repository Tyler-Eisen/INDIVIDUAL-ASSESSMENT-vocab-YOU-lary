import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showCards = (arr) => {
  clearDom();

  let cardString = '';
  arr.forEach((item) => {
    const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
    renderToDOM('#add-button', btnString);

    cardString += `<div class="card">
   <h1>${item.title} </h1>
   <h2>Category: ${item.category}</h2>
    ${item.definition} 
    <br>${item.dateSubmitted}</br></div>
    <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
    <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>`;
    renderToDOM('#store', cardString);
  });
};

export default showCards;
