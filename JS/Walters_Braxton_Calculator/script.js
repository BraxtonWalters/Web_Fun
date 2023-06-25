let calDisplay = document.getElementById("display");
let firstNum = null;
let oper = null;
let secNum = null;

// problem 1
// need to get the display to stop disappearing my numbers! I fucking did it!!! lol 
function press(element) {
    if (firstNum === null) {
        calDisplay.innerText = element;
        firstNum = calDisplay.innerText;
    } else {
        firstNum += element;
        calDisplay.innerText = firstNum;
    }
}

// figuring out the clear should be easy? haha prob not. easy peazy n/m

function clr() {
    calDisplay.innerText = "0";
}

// now I'm thinking when you press one of the operator buttons it grabs the number and stores it for later and clears the display... 

function setOP(element) {
    firstNum = calDisplay.innerText;
    oper = element;
    calDisplay.innerText = "0";
    secNum = calDisplay.innerText;
}

function calculate() {
    let result;
    firstNum = parseFloat(firstNum);
    secNum = parseFloat(secNum);
    switch (oper) {
        case "/":
            result = firstNum / secNum;
            break;
        case "*":
            result = firstNum * secNum;
            break;
        case "-":
            result = firstNum - secNum;
            break;
        case "+":
            result = firstNum + secNum;
            break;
    }
    calDisplay.innerText = result;
    console.log(result);
    firstNum = null;
    secNum = null;
}