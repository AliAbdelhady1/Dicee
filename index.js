var randomNumber1 = Math.floor(Math.random()*6 )+ 1; // random naumber 1 - 6
var randomImage = "dice " + randomNumber1 + ".png";  //random image 1 - 6
var randomIMageSrc = "./images/" + randomImage;  //random image src
var player1 = document.querySelectorAll("img")[0].setAttribute("src", randomIMageSrc);  // change atribute 
// ------------------------------------------------------------------------------------------
var randomNumber2 = Math.floor(Math.random()*6 )+ 1;  
var randomImage2 = "dice " + randomNumber2 + ".png"; 
var randomIMageSrc2 = "./images/" + randomImage2;
var player2 = document.querySelectorAll("img")[1].setAttribute("src", randomIMageSrc2);
// ------------------------------------------------------------------------------------------
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}