// Array of inspirational words
const inspirations = [
    "Believe in yourself",
    "Dream big",
    "Stay positive",
    "Embrace change",
    "Keep going",
    "Never give up",
    "Focus on the good",
    "Take chances",
    "Be fearless",
    "Stay motivated"
];

// Array of random adjectives
const adjectives = [
    "amazing",
    "inspiring",
    "extraordinary",
    "wonderful",
    "empowering",
    "beautiful",
    "brilliant",
    "awesome",
    "fantastic",
    "phenomenal"
];

// Array of random nouns
const nouns = [
    "journey",
    "opportunity",
    "adventure",
    "success",
    "happiness",
    "achievement",
    "potential",
    "fulfillment",
    "victory",
    "purpose"
];

// Function to generate a random index
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Function to generate a random inspirational quote
function generateInspirationalQuote() {
    const inspiration = inspirations[getRandomIndex(inspirations)];
    const adjective = adjectives[getRandomIndex(adjectives)];
    const noun = nouns[getRandomIndex(nouns)];

    return `${inspiration} ${adjective} ${noun}.`;
}

// Generate and display a random inspirational quote
console.log(generateInspirationalQuote());
