const diceElement = document.getElementById('dice');
const diceImage = document.getElementById('diceImage');

diceElement.addEventListener('click', function() {
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    diceImage.src = `images/${randomNumber}.png`;
});
