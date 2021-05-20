(() => {
  // TODO: onderstaande topics doornemen
  // -----------------------------------
  // TODO: https://stackoverflow.com/questions/27913537/creating-buttons-in-a-javascript-constructor
  // TODO: https://stackoverflow.com/questions/9039205/create-default-behavior-for-when-appendchild-is-called-on-an-object
  // TODO: https://www.programiz.com/javascript/prototype

  const LETTERS_IN_ALFABET = [
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
  const wordToQuess = document.querySelector(".word-to-quess");
  const characters = document.querySelector(".characters");

  let randomWordToQuess = null;
  let lives = 10;

  const loadWords = () => {
    LETTERS_IN_ALFABET.forEach((letter) => {
      createCharacters({
        character: letter,
        documentInBody: characters,
      });
    });
  };

  const randomWord = (words) => {
    const wordsCount = words.length;

    const randomChosenWord = Math.floor(Math.random() * wordsCount);

    randomWordToQuess = words[randomChosenWord];
  };

  const hide = (element) => {
    element.style.display = "none";
  };

  const show = (element) => {
    element.style.display = "block";
  };

  window.addEventListener("load", () => {
    const button = new Button();
    button.setName("Start Game");
    button.setPositionInBody(container);
    button.setFunction(loadWords);
    // button.isDisabled(true);
    button.createButton();
  });
})();
