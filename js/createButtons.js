function Button() {
  this.name;
  this.className;
  this.position;
  this.functionality;
  this.disabled = false;
}

Button.prototype.setName = (name) => {
  this.name = name;
};

// Button.prototype.isDisabled = (disabled) => {
//   this.disabled = disabled;
// };

Button.prototype.setPositionInBody = (positionInBody = document.body) => {
  this.position = positionInBody;
};

Button.prototype.setFunction = (buttonFunction) => {
  this.functionality = buttonFunction;
};

Button.prototype.createButton = (buttonFunction) => {
  const button = document.createElement("BUTTON");
  button.innerHTML = this.name;
  button.classList.add(this.className || "default");
  button.isDisabled = this.disabled;

  button.addEventListener("click", () => {
    this.functionality();
  });

  this.position.appendChild(button);
};
