function logout(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login"
    }
}

function disappear(element) {
    element.remove();
}

function likeCount(element) {
    let likes = parseInt(element.innerText);
    likes++;
    alert(`Ninja was Liked ${likes} times!`);
    element.innerText = `${likes} likes`
}
