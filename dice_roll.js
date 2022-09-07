
//Dice selection
var dice = parseInt(prompt("What sided die to you want to roll?"));


//Equa-partition bins to place random number into using finite precision limit (simulates the "fair dice" aspect)
var x = .999999999999999999/dice;


//seeding the random number (between 0 and 0.999...)
var n = Math.random();


//Dice rolling engine that allows for nothing less than 1 and nothing more than the highest value of the dice selected
if (n < x) {
    n = Math.floor((n*dice)+1)
}
    else if (n < x*(dice-1)) {
        n = Math.floor((n*dice))
    }
    else if (n > x*(dice-1)){
        n = Math.ceil((n*dice))
    }

//Display the dice roll result
alert(n);
