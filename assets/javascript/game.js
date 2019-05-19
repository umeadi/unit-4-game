// GLOBAL VARIABLES

var randomNumber;
var currentScore;
var wins;
var losses;

var crystal = {
    crystal1:
    {
        name: 'crystal1',
        value: 0
    },
    crystal2:
    {
        name: 'crystal2',
        value: 0
    },
    crystal3:
    {
        name: 'crystal3',
        value: 0
    },
    crystal4:
    {
        name: 'crystal4',
        value: 0
    }
};


// player will be shown a random number at the start of the game
// a new random number should be generated upon each win/loss to each crystal
// every crystal needs to have a random value between one and 12
// when clicking each crystal, the value should be getting added to the curren total
// if the total from the crystals equals the random numbner a win will be generated
// if the total is larger than the random numnber, a loss will be generated
//

// FUNCTIONS

// Random Numnber Generator Function

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Start and restart game 
var startGame = function () {

    // Reset the current score

    currentScore = 0;

    // Set a new target score (btw 19 and 120)

    randomNumber = getRandom(19, 120);

    // Assign values to each crystal (btw 1 and 12)

    crystal.crystal1.value = getRandom(1, 12);
    crystal.crystal2.value = getRandom(1, 12);
    crystal.crystal3.value = getRandom(1, 12);
    crystal.crystal4.value = getRandom(1, 12);
    
    
    // Display the HTML on page to reflect all of our changes
    $('.currentScore').html(currentScore);
    $('.randomNumber').html(randomNumber);

    // Test
    console.log('-------------------------------------------------------------------')
    console.log('Target Score: ' + randomNumber);
    console.log('Crystal 1: '+ crystal.crystal1.value + ' | Crystal 2: ' + crystal.crystal2.value + ' | Crystal 3: ' + crystal.crystal3.value + ' | Crystal 4: ' + crystal.crystal4.value);
    console.log('-------------------------------------------------------------------');
}

// Calculate totals from crystals as they are clicked
var addValues = function(crystal) {

    // Calulates current total score
    currentScore = currentScore + crystal.value;

    // Update the HTML on page to current score
    $('.currentScore').html(currentScore);

    // Test
    console.log('Your Score: ' + currentScore);
}



startGame();


$(".crystal1").on('click', function () {

    // Clicking on crystal will add value to current score
    addValues(crystal.crystal1);

});

$(".crystal2").on("click", function () {

    // Clicking on crystal will add value to current score
    addValues(crystal.crystal2);

});

$(".crystal3").on("click", function () {

    // Clicking on crystal will add value to current score
    addValues(crystal.crystal3);

});

$(".crystal4").on("click", function () {

    // Clicking on crystal will add value to current score
    addValues(crystal.crystal4);

});