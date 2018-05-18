//generate numbers and display on the screen

var targetNum = 30 + Math.floor(Math.random() * 40);
var orange = 1 + Math.floor(Math.random() * 9);
var green = 1 + Math.floor(Math.random() * 9);
var blue = 1 + Math.floor(Math.random() * 9);
var purple = 1 + Math.floor(Math.random() * 9);

var playerNum = 0;
var wins = 0;
var losses = 0;

$("#targetNum").html(targetNum);
$("#playerNum").html(playerNum);
$("#wins").html(wins);
$("#losses").html(losses);

console.log(targetNum);

//reset function

var reset = function() {
    playerNum = 0;
    targetNum = 30 + Math.floor(Math.random() * 40);
    orange = 1 + Math.floor(Math.random() * 9);
    green = 1 + Math.floor(Math.random() * 9);
    blue = 1 + Math.floor(Math.random() * 9);
    purple = 1 + Math.floor(Math.random() * 9);

    $("#targetNum").html(targetNum);
    $("#playerNum").html(playerNum);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

//function that checks if the player has won the game

var win = function() {
    if (playerNum == targetNum) {
        wins++;
        alert("You win!");
        $("#wins").html(wins);
        reset();

    } else if (playerNum > targetNum) {
        losses++;
        alert("You Lose!");
        $("#losses").html(losses);
        reset();
    }
};

//Crystal clicks add num to playertotal and calls win function

$("#orange").on("click", function() {
    playerNum = playerNum + orange;
    $("#playerNum").html(playerNum);
    win();
})

$("#green").on("click", function() {
    playerNum = playerNum + green;
    $("#playerNum").html(playerNum);
    win();
})

$("#blue").on("click", function() {
    playerNum = playerNum + blue;
    $("#playerNum").html(playerNum);
    win();
})

$("#purple").on("click", function() {
    playerNum = playerNum + purple;
    $("#playerNum").html(playerNum);
    win();
})