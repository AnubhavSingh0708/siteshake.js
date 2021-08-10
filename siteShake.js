var by1=0;
var bx1=0;
function rotate(){
    document.body.style.transform = "rotate(45deg)";
    setTimeout(function(){ rotate2()}, 100);
    setTimeout(function(){ moveD()}, 10000);
}
function rotate2(){
    document.body.style.transform = "rotate(315deg)";
    setTimeout(function(){ rotate3()}, 100);
}
function rotate3(){
    document.body.style.transform = "rotate(45deg)";
    setTimeout(function(){ rotate4()}, 100);
}
function rotate4(){
    document.body.style.transform = "rotate(315deg)";
    setTimeout(function(){ rotate()}, 100);
}
function moveD(){
document.body.style.width = by1;
document.body.style.height = bx1; 
by1--;
bx1--;
setTimeout(function(){ moveD()}, 100);
}
