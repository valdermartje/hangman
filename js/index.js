"use strict";

(() => {
  // TODO: onderstaande topics doornemen
  // -----------------------------------
  // TODO: https://stackoverflow.com/questions/27913537/creating-buttons-in-a-javascript-constructor
  // TODO: https://stackoverflow.com/questions/9039205/create-default-behavior-for-when-appendchild-is-called-on-an-object
  // TODO: https://www.programiz.com/javascript/prototype

  const CHARACTERS_IN_ALFABET = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const WORDS_TO_QUESS = [
    "abruptly",
    "absurd",
    "abyss",
    "affix",
    "askew",
    "avenue",
    "awkward",
    "axiom",
    "azure",
    "bagpipes",
    "bandwagon",
    "banjo",
    "bayou",
    "beekeeper",
    "bikini",
    "blitz",
    "blizzard",
    "boggle",
    "bookworm",
    "boxcar",
    "boxful",
    "buckaroo",
    "buffalo",
    "buffoon",
    "buxom",
    "buzzard",
    "buzzing",
    "buzzwords",
    "caliph",
    "cobweb",
    "cockiness",
    "croquet",
    "crypt",
    "curacao",
    "cycle",
    "daiquiri",
    "dirndl",
    "disavow",
    "dizzying",
    "duplex",
    "dwarves",
    "embezzle",
    "equip",
    "espionage",
    "euouae",
    "exodus",
    "faking",
    "fishhook",
    "fixable",
    "fjord",
    "flapjack",
    "flopping",
    "spritz",
    "squawk",
    "staff",
    "strength",
    "strengths",
    "stretch",
    "stronghold",
    "stymied",
    "subway",
    "swivel",
    "syndrome",
    "thriftless",
    "thumbscrew",
    "topaz",
    "transcript",
    "transgress",
    "transplant",
    "triphthong",
    "twelfth",
    "twelfths",
    "unknown",
    "unworthy",
    "unzip",
    "uptown",
    "vaporize",
    "vixen",
    "vodka",
    "voodoo",
    "vortex",
    "voyeurism",
    "walkway",
    "waltz",
    "wave",
    "wavy",
    "waxy",
    "wellspring",
    "wheezy",
    "whiskey",
    "whizzing",
    "whomever",
    "wimpy",
  ];

  const container = document.querySelector(".container");
  const charactersElements = document.querySelector(".characters");
  const characterToQuessSection = document.querySelector(".character-to-quess-section");
  const livesElement = document.querySelector(".lives");

  let randomWordToQuess = null;
  let count = 0;
  let lives;
  let chosenCharacters = [];

  const loadCharacters = () => {
    CHARACTERS_IN_ALFABET.forEach((character) => {
      createCharacters(
        character,
        charactersElements,
        chosenCharacters,
        randomWordToQuess
      );
    });
  };

  const createCharacters = (character, documentInBody = document.body, chosenCharacters) => {

    const characterHTMLElement = document.createElement("DIV");

    characterHTMLElement.dataset.character = character;
    characterHTMLElement.classList.add("character");
    characterHTMLElement.innerHTML = character;

    characterHTMLElement.addEventListener("click", () => {
        chosenCharacters.push(character);
        setLessLives();
        searchCharacterPosition();
    });

    documentInBody.appendChild(characterHTMLElement);
  }

  const createChooseCharacterField = randomWordToQuess => {

    for (let count = 0; count < randomWordToQuess.length; count++) {
      characterToQuessSection.innerHTML += `<div class="character-to-quess"><p data-is-solved="false">${randomWordToQuess[count]}</p></div>`;
    }
  }

  const removeChooseCharacterField = () => {
    characterToQuessSection.innerHTML = "";
  }

  const randomWord = () => {

    const randomChosenWord = Math.floor(Math.random() * WORDS_TO_QUESS.length);
  
    randomWordToQuess =  WORDS_TO_QUESS[randomChosenWord];
  };

  const searchCharacterPosition = () => {

    const quessCharacters = document.querySelectorAll(".character-to-quess p");
    const quessCharactersIsSolved = document.querySelectorAll('.character-to-quess p[data-is-solved="true"]');
    const characterElements = document.querySelectorAll(".character");

    quessCharacters.forEach(element => {

      if (element.innerHTML.toLowerCase() === chosenCharacters[chosenCharacters.length - 1].toLowerCase()) {
      
        element.style.opacity = "1";
        element.dataset.isSolved = "true";
      }
      
    });

    // THIS IS THE VICTORY
    if (quessCharactersIsSolved.length === randomWordToQuess.length) {
    
      console.log("FINISHED");
      livesElement.innerHTML = "You have quessed the word my Legend ????????"

      characterElements.forEach(character => {
        character.style.display = "none";
        livesElement.innerHTML = "";
      });
    }

    characterElements.forEach(character => {

      if (character.innerHTML.toLowerCase() === chosenCharacters[chosenCharacters.length - 1].toLowerCase()) {
      
        character.style.pointerEvents = "none";
        character.style.backgroundColor = "grey";
      }
    });
  }

  const setLives = () => {
    lives = 10;
  }


  // TODO: make lives less when it doesn't contain in a random word
  const setLessLives = () => {

    const characterElements = document.querySelectorAll(".character");

    livesElement.innerHTML = `Lives: ${lives}`;

    console.log(lives);
        
    if (lives === 0) {
      
      removeChooseCharacterField();
      
      characterElements.forEach(character => {
        character.style.display = "none";
        livesElement.innerHTML = "Out of lives ????????";
      });
    } 

    lives--; 
  }

  window.addEventListener("load", () => {

    createButton(
      ["Start Game", "Stop Game"], 
      "default-button", 
      container, 
      () => { 
        randomWord(),
        loadCharacters(),
        setLives();
        createChooseCharacterField(randomWordToQuess)
      }
    );
  });
})();
