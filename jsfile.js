var randomnum = Math.round((Math.random()*5) + 1);
var img1 = document.getElementsByTagName("img")[0];
var randomimg1 = "images/dice"+randomnum+".png";
img1.setAttribute("src", randomimg1);

var randomnum2 = Math.round((Math.random()*5) + 1);
var randomimg2 = "images/dice"+randomnum2+".png";
document.getElementsByTagName("img")[1].setAttribute("src", randomimg2);

if(randomnum < randomnum2){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 wins";
}
else if( randomnum>randomnum2){
    document.getElementsByTagName("h1")[0].textContent = "Player 1 wins";
}
else if(randomnum === randomnum2){
    document.getElementsByTagName("h1")[0].textContent = "Draw!";
}

function reload(){
    window.location.reload();
}