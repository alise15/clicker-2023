let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;

let diameter = 200;

let clickerButton = document.getElementById("button");
let scoreDisplay = document.getElementById("score");

function OnButtonClick(){
    punkti += 1; 
     document.getElementById("score").innerHTML = punkti;

    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = "rgb("+red.toString() + "," + green.toString() + "," + blue.toString() + ")";
     document.getElementById("button").style.backgroundColor = "rgb(0, 0, 0) "

     diameter -= 5;

     if(diameter <= 5){
        scoreDisplay.innerHTML = "You Won!"
     }

     document.getElementById("button").style.width = diameter.toString() + "px";
     document.getElementById("button").style.height = diameter.toString() + "px";

}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}