import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USE THIS FORM TO CREATE AND UPDATE
const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Card Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Category</label>
        <textarea class="form-control" placeholder="Card Description" id="category" style="height: 100px">${obj.category || ''}</textarea>
      </div>
    
      <div class="form-group">
        <label for="price">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      
  
      <button type="submit" id="submit-card-btn" class="btn btn-primary">Submit Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
