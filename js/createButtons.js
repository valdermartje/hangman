const createButton = (setName, setClass = "default", setPositionInBody, setFunction) => {

  const button = document.createElement("BUTTON");
  button.innerHTML = setName;
  button.classList.add(setClass);
  
  button.addEventListener("click", setFunction);
  
  setPositionInBody.appendChild(button);
}

// const hide = (element) => {
//   element.style.display = "none";
// };

// const show = (element) => {
//   element.style.display = "block";
// };
