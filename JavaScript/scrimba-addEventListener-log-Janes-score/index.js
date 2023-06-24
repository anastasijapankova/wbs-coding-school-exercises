let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const button = document.querySelector('button')

button.addEventListener('click', function () {
    const index = button.getAttribute('data-index');
    const player = data[index].player;
    const score = data[index].score;
    console.log(`${player}'s score is ${score}`);
});
