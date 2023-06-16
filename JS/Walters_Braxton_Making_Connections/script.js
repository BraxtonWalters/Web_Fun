

function changeName(elemID) {
    document.getElementById(elemID).innerText = "Braxton Walters";
}

function addUser(elemID0, elemID, elemID1) {
    let connectionNum = parseInt(document.getElementById(elemID1).innerText);
    let requestNum = parseInt(document.getElementById(elemID).innerText);
    requestNum--;
    connectionNum++;
    document.getElementById(elemID1).innerText = connectionNum;
    document.getElementById(elemID).innerText = requestNum;
    document.getElementById(elemID0).remove();
}

function declineUser(elemID1, elemID2) {
    let requestNum = parseInt(document.getElementById(elemID1).innerText);
    requestNum--
    document.getElementById(elemID1).innerText = requestNum;
    document.getElementById(elemID2).remove();
}