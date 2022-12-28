document.getElementById("buttof").onclick = function(){
    document.getElementById("pops").innerHTML = "Thanks for liking my website!"
    document.getElementById('buttof').style.display = "none";
    document.getElementById("butto").style.display = "none";
document.getElementById("popsa").style.display = "none";

}
document.getElementById("butto").onclick = function(){
document.getElementById("popsa").innerHTML = "You disliked my website!";
document.getElementById('butto').style.display = "none";
document.getElementById("buttof").style.display = "none";
document.getElementById("pops").style.display = "none";

}