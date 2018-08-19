//-- Main function ------------------------------------------------------
function blackJack() {

//-- First two cards of the player --------------------------------------
    var scorePlayer = parseInt(document.getElementById("scorePlayer").innerHTML = 0);
    for (var i = 0; i < 2; i++) {
        var randPlayer = Randomer();
        var validatePlayer = ValidateCard(randPlayer);
        NewCard("newCard1", randPlayer);
        scorePlayer += validatePlayer;
    }
    if (scorePlayer > 21) {
        scorePlayer -= 10;
    }
    document.getElementById("scorePlayer").innerHTML = scorePlayer;



//-- First two cards of the dealer --------------------------------------
    var scoreDealer = parseInt(document.getElementById("scoreDealer").innerHTML = 0);
    for (var i = 0; i < 2; i++) {
        var randDealer = Randomer();
        var validateDealer = ValidateCard(randDealer);
        NewCard("newCard2", randDealer);
        scoreDealer += validateDealer;
    }
    if (scoreDealer > 21) {
        scoreDealer -= 10;
    }
    document.getElementById("scoreDealer").innerHTML = scoreDealer;

}



//-- New player's card -------------------------------------------------
function addNewCard() {
    var scorePlayer = parseInt(document.getElementById("scorePlayer").innerHTML);
    var randPlayer = Randomer();
    var validatePlayer = ValidateCard(randPlayer);
    NewCard("newCard1", randPlayer);
    scorePlayer += validatePlayer;
    document.getElementById("scorePlayer").innerHTML = scorePlayer;

    if (scorePlayer > 21) {
        lightBox.style.display = "block";
        document.getElementById("winner").innerHTML = "Dealer Won";
    }

}


//-- Players turn --------------------------------------------------------
function  Hold() {

    var scoreDealer = parseInt(document.getElementById("scoreDealer").innerHTML);
    while (scoreDealer < 18) {
        var randDealer = Randomer();
        var validateDealer = ValidateCard(randDealer);
        NewCard("newCard2", randDealer);
        scoreDealer += validateDealer;
    }
    document.getElementById("scoreDealer").innerHTML = scoreDealer;

    winnerCheck();

}




//-- generate a new card ----------------------------------------------
function NewCard(hostId, rand) {


//-- Create image card ---
    var img = document.createElement("img");
    img.src = "img/" + rand + ".png";
    img.className = "card";

//-- Positioning of the new card ---
    var newCard = document.getElementById(hostId);
    newCard.insertBefore(img, newCard.lastChild);

}



//-- Create randome card from 1 to 52 ---------------------------------
function Randomer() {


    var randomNumber = Math.floor((Math.random() * 52) + 1);
    return randomNumber;

}



//-- Calculate thevalue equivalent ------------------------------------
function ValidateCard(randomer) {

    if (randomer <= 4) {
        return 11;
    }
    if ((randomer > 4) && (randomer <= 8)) {
        return 2;
    }
    if ((randomer > 8) && (randomer <= 12)) {
        return 3;
    }
    if ((randomer > 12) && (randomer <= 16)) {
        return 4;
    }
    if ((randomer > 16) && (randomer <= 20)) {
        return 5;
    }
    if ((randomer > 20) && (randomer <= 24)) {
        return 6;
    }
    if ((randomer > 24) && (randomer <= 28)) {
        return 7;
    }
    if ((randomer > 28) && (randomer <= 32)) {
        return 8;
    }
    if ((randomer > 32) && (randomer <= 36)) {
        return 9;
    }
    if (randomer > 36) {
        return 10;
    }

}




//-- Check the winner --------------------------------------------------
function winnerCheck() {

    var scorePlayer = parseInt(document.getElementById("scorePlayer").innerHTML);
    var scoreDealer = parseInt(document.getElementById("scoreDealer").innerHTML);



    if (scorePlayer < scoreDealer && scoreDealer <= 21) {
        lightBox.style.display = "block";
        document.getElementById("winner").innerHTML = "Dealer Won";
    }

    if (scoreDealer < scorePlayer && scorePlayer <= 21) {
        lightBox.style.display = "block";
        document.getElementById("winner").innerHTML = "Player Won";
    }

    if (scorePlayer === scoreDealer) {
        lightBox.style.display = "block";
        document.getElementById("winner").innerHTML = "DRAW!";
    }

    if (scorePlayer > 21) {
        lightBox.style.display = "block";
        document.getElementById("winner").innerHTML = "Dealer Won";
    }

    if (scoreDealer > 21) {
        lightBox.style.display = "block";
        document.getElementById("winner").innerHTML = "Player Won";
    }

}


//-- New game -------------------------------------------------------
var lightBox = document.getElementById("winnerBlock");
function  newGame() {
    lightBox.style.display = "none";
    window.location.reload();
}









// return multiple values from a function 
// https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript











