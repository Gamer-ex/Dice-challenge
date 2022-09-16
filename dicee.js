var rm1=Math.floor(Math.random() * 6) + 1;
var rd1= "images/dice" + rm1 + ".png";
var ij=document.querySelectorAll("img")[0];
ij.setAttribute("src", rd1);
var rm2=Math.floor(Math.random() * 6) + 1;
var rd2= "images/dice" + rm2 + ".png";
var ii=document.querySelectorAll("img")[1];
ii.setAttribute("src", rd2);
if(rm1 > rm2){
    document.querySelector("h1").innerHTML ="Player 1 wins";
}else if(rm2 > rm1){
    document.querySelector("h1").innerHTML ="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML ="Draw";
}