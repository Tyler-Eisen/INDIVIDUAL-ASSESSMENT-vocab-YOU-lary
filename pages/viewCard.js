import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewCard = (obj) => {
  clearDom();

  const cardString = `
  <div class="card">
  
<h1>${obj.title} </h1>
   <h2>Category: ${obj.category}</h2>
    ${obj.definition} 
    <br>${obj.dateSubmitted}</br></div>
    <i class="btn btn-success fas fa-eye" id="view-card-btn--${obj.firebaseKey}"></i>
   `;

  renderToDOM('#store', cardString);
};

export default viewCard;
