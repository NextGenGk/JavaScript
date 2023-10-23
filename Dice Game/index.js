// Generate random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

// Select the dice based on the random number generator
var diceImage1= "dice" + randomNumber1 + ".png";    // dice1.png - dice6.png

// randomly select the dice image based on the random number generator
var diceImgSrc = "images/" + diceImage1;    // images/dice1.png - images/dice6.png

// get the image
var image1 = document.querySelectorAll("img")[0];

// set the image
image1.setAttribute("src", diceImgSrc);



// Generate random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the dice based on the random number generator
var diceImage2= "dice" + randomNumber2 + ".png";

// randomly select the dice image based on the random number generator
var diceImgSrc2 = "images/dice" + randomNumber2 + ".png";

// get the image
var image2 = document.querySelectorAll("img")[1];

// set the image
image2.setAttribute("src", diceImgSrc2);

// Set the title (Which players is Won)
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Match Draw";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Won";
}





