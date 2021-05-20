const WORDS_TO_CHOOSE = [    "abruptly",    "absurd",    "abyss",    "affix",    "askew",    "avenue",    "awkward",    "axiom",    "azure",    "bagpipes",    "bandwagon",    "banjo",    "bayou",    "beekeeper",
    "bikini",    "blitz",    "blizzard",    "boggle",    "bookworm",    "boxcar",    "boxful",    "buckaroo",    "buffalo",    "buffoon",    "buxom",    "buzzard",    "buzzing",    "buzzwords",    "caliph",    "cobweb",
    "cockiness",    "croquet",    "crypt",    "curacao",    "cycle",    "daiquiri",    "dirndl",    "disavow",    "dizzying",    "duplex",    "dwarves",    "embezzle",    "equip",    "espionage",    "euouae",    "exodus",
    "faking",    "fishhook",    "fixable",    "fjord",    "flapjack",    "flopping",    "spritz",    "squawk",    "staff",    "strength",    "strengths",    "stretch",    "stronghold",    "stymied",    "subway",
    "swivel",    "syndrome",    "thriftless",    "thumbscrew",    "topaz",    "transcript",     "transgress",     "transplant",     "triphthong",     "twelfth",     "twelfths",     "unknown",     "unworthy",     "unzip", 
    "uptown",     "vaporize",     "vixen",     "vodka",     "voodoo",    "vortex",   "voyeurism",    "walkway",    "waltz",    "wave",    "wavy",    "waxy",    "wellspring",    "wheezy",    "whiskey",    "whizzing",    "whomever",    "wimpy"
];

const LETTERS_IN_ALFABET = ["A","B", "C,", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


const container = document.querySelector(".container");


window.addEventListener("load", function() {

    createButton(
        buttonName = "Start game", 
        buttonClass =  null,
        positionInBody = container,
        buttonFunction = function(){ console.log("clicked") }
    )

    // const startGameButton = new Button();
    // startGameButton.setButtonName("Start game"); 

    console.log("loaded");
})