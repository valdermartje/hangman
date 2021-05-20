function createButton(buttonName, buttonClass, positionInBody) {
    
    const button = document.createElement("BUTTON");
    button.innerHTML = buttonName;
    button.classList.add(buttonClass || "default");

    if (positionInBody) {
        positionInBody.appendChild(button);
    } else {
        document.body.appendChild(button);
    }
}