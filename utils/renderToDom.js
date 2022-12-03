const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  console.warn(selectedDiv);
  console.warn(content);
  selectedDiv.innerHTML = content;
  console.warn(selectedDiv);
};

export default renderToDOM;
