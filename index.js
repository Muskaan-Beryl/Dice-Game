let diceNumber1 = Math.floor(Math.random() * 6) + 1;
let imageAddress1 = "images/dice" + diceNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imageAddress1);

let diceNumber2 = Math.floor(Math.random() * 6) + 1;
let imageAddress2 = "images/dice" + diceNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imageAddress2);

if (diceNumber1 > diceNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (diceNumber2 > diceNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
