// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showCards = (arr) => {
  // clearDom();

  let cardString = '';
  arr.forEach((item) => {
  //     cardString += `
  //   <div class="card" style="width: 18rem;">
  //     <div class="card-body">
  //       <div class="fav-star" style="height: 26px;">
  //         ${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : '<span></span>'}
  //         ${item.public ? '<span class="badge bg-dark"><i class="fa fa-lock-open" aria-hidden="true"></i></span>' : '<span class="badge bg-dark"><i class="fa fa-lock" aria-hidden="true"></i></span>'}
  //       </div>
  //     <h5 class="card-title">${item.title}</h5>
  //     <h6 class="card-title">${item.category}</h6>
  //     <p class="card-text definition">${item.definition}</p>
  //     <div class="book-icons">
  //       <i class="btn btn-success"   id="view-card-btn--${item.firebaseKey}">
  //         <span><i class= "fas fa-eye"></i></span>
  //       </i>
  //       ${item.uid === uid ? `
  //       <i id="edit-card-btn--${item.firebaseKey}"  class="btn btn-info">
  //         <span><i class= "fas fa-edit"></i></span>
  //       </i>
  //       <i id="delete-card-btn--${item.firebaseKey}"  class="btn btn-danger">
  //         <span><i class= "fas fa-trash-alt"></i></span>
  //       </i>` : ''}
  //     </div>
  //   </div>
  // </div>
  //   `;
    cardString += `<div class="card">
   <h1>${item.title} </h1>
   <h2>Category: ${item.category}</h2>
    ${item.definition} 
    <br>${item.dateSubmitted}</br></div>
    <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>`;
    renderToDOM('#store', cardString);
  });
};

export default showCards;