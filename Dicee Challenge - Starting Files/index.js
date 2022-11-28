var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2; 

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2); 


// Winner


if (randomNumber1 > randomNumber2) {
    document.getElementById("title").innerHTML = "Player 1 Wins!!";
}
else if (randomNumber1 < randomNumber2) {
    document.getElementById("title").innerHTML = "Player 2 Wins!!";
}
else {
    document.getElementById("title").innerHTML = "Draw!!";
}

