let myElement = document.getElementById("likes");
let likenum = parseInt(myElement.innerText);

function likeIncreaser() {
    likenum++;
    myElement.innerText = `${likenum} like(s)`
}