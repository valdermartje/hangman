const createCharacters = ({character, documentInBody = document.body}) => {

    const characterHTMLElement = document.createElement("DIV");
    characterHTMLElement.dataset.character = character;
    characterHTMLElement.classList.add("letter");
    characterHTMLElement.innerHTML = character;

    characterHTMLElement.addEventListener("click", () => {
        console.log(character);
    });

    documentInBody.appendChild(characterHTMLElement);
}