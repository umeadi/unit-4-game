// GLOBAL VARIABLES

var randomNumber;
var currentscore;
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
// if the totla is larger than the random numnber, a loss will be generated
//

// FUNCTIONS
// Random Numnber Generator Function

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var startGame = function () {

    // Reset the current score

    var currentScore = 0;

    // Set a new target score (btw 19 and 120)

    randomNumber = Math.floor(Math.random()* (120 - 19 +1)) + 19;
    // Change the HTML to reflect all of these changes
}




$(".crystal1").on("click", function () {

    // Clicking the crystal triggers an alert message.
    alert("You clicked crystal number1!");
    console.log("You clicked crystal number 1");

});

$(".crystal2").on("click", function () {

    // Clicking the crystal triggers an alert message.
    alert("You clicked crystal number 2!");
    console.log("You clikced crystal number 2");

});

$(".crystal3").on("click", function () {

    // Clicking the crystal triggers an alert message.
    alert("You clicked crystal number 3!");
    console.log("You clikced crystal number 3");

});

$(".crystal4").on("click", function () {

    // Clicking the crystal triggers an alert message.
    alert("You clicked crystal number 4!");
    console.log("You clikced crystal number 4");

});