const createButton = (
  setName = [notClickedVersion, onClickedVersion], 
  setClass = "default", 
  setPositionInBody, 
  setFunction) => {

  const button = document.createElement("BUTTON");
  button.innerHTML = setName[0];
  button.classList.add(setClass);
  
  button.addEventListener("click", 
      setFunction
  );

  button.addEventListener("click", () => {
    button.innerHTML = setName[1];
  });
  
  setPositionInBody.appendChild(button);
}