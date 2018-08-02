var inquirer = require("inquirer");
var choices = ["Micheal", "Taylor", "Jones", "Justin", "mat"];
var randomWord = choices[Math.floor(Math.random() * choices.length)];
var randomWordArray = randomWord.split("");
var placeHolderArray = randomWordArray.map(function(char) {
    return "_";
});
var chance = 9;
var toGuess ="";
function printWord(){
    console.log(placeHolderArray.join(" "));
}
function isUserWin(){
    for(var i=0; i<placeHolderArray.length; i++){ 
        if(placeHolderArray[i] !== randomWordArray[i]){
            return false;
        }
    }
    return true;
}
// Created a series of questions
printWord();
Guess();
function Guess(char){
if(chance != 0){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What's your guess???"
    },
    ]).then(function(user) {
    var index = randomWord.indexOf(user.name.toLowerCase());
    console.log("Index: " +index); 
        if (randomWord.indexOf(user.name) >= 0) {
            placeHolderArray[index] = randomWordArray[index];
            if(isUserWin()){
                return console.log("You Win!!")
            }
        }
    // If the user doesn't guess the password...
        else {
        chance --;
        console.log("==============================================");
        console.log("Sorry, wrong guess. You have only " + chance + " guesses left");  
        console.log("==============================================");
        //check to see if the user is out of guesses
        }
        printWord();
        Guess();
    });
    }
}