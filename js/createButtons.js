function createButton(buttonName, buttonClass, positionInBody, buttonFunction) {

    const button = document.createElement("BUTTON");

    button.innerHTML = buttonName;
    button.classList.add(buttonClass || "default");
    button.addEventListener("click", buttonFunction);

    if (positionInBody) {

        positionInBody.appendChild(button);
    } else {
        console.error("There is no position specified in the 'positionInBody' parameter of the createButton() function");
        throw new Error("There is no position specified in the 'positionInBody' parameter of the createButton() function");
    }
}

/**
 * function Button() {

    const button = document.createElement("BUTTON");    
}

Button.prototype.setButtonName = function(buttonName) {
    button.innerHTML = buttonName;
}

Button.prototype.setButtonClass = function(buttonClass) {
    button.classList.add(buttonClass || "default");
}

Button.prototype.setPositionInBody = function(positionInBody) {

    if (positionInBody) {

        positionInBody.appendChild(button);
    } else {
        console.error("There is no position specified in the 'positionInBody' parameter of the createButton() function");
        throw new Error("There is no position specified in the 'positionInBody' parameter of the createButton() function");
    }
}

Button.prototype.setButtonFunction = function() {
    button.addEventListener("click", buttonFunction);
}
 */