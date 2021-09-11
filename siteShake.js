
function generateRandomColor()

{

    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    return randomColor;

    //random color will be freshly served

}
document.body.style.transition = "all 0.1s";

function rotate(){
    document.body.style.transform = "rotate(45deg)";
    setTimeout(function(){ rotate2()}, 100);
    document.body.style.backgroundColor = generateRandomColor() ;
    setTimeout(function(){ window.location.assign("https://anubhavsingh0708.github.io/siteshake.js/bsod.html")}, 5000);
}
function rotate2(){
    document.body.style.transform = "rotate(315deg)";
    setTimeout(function(){ rotate3()}, 100);
    document.body.style.backgroundColor = generateRandomColor() ;
}
function rotate3(){
    document.body.style.transform = "rotate(45deg)";
    setTimeout(function(){ rotate4()}, 100);
    document.body.style.backgroundColor = generateRandomColor() ;
}
function rotate4(){
    document.body.style.transform = "rotate(315deg)";
    setTimeout(function(){ rotate()}, 100);
    document.body.style.backgroundColor = generateRandomColor() ;
}
