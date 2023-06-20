let calDisplay = document.getElementById("display");
let firstNum = null;
let oper = null;
let secNum = null;

// problem 1
// need to get the display to stop disappearing my numbers! I fucking did it!!! lol 
function press(element) {
    if (firstNum === null) {
        calDisplay.innerText = "0";
        calDisplay.innerText += element;
        firstNum = parseFloat(calDisplay.innerText);
    } else {
        calDisplay.innerText = "";
        calDisplay.innerText += element;
        secNum = parseFloat(calDisplay.innerText);
    }
    console.log(firstNum, secNum);
}

// figuring out the clear should be easy? haha prob not. easy peazy n/m

function clr() {
    calDisplay.innerText = "0";
    firstNum = null;
    oper = null;
    secNum = null;
}

// now I'm thinking when you press one of the operator buttons it grabs the number and stores it for later and clears the display... 

function setOP(element) {
    if (oper === null) {
        oper = element;
    }
}

function calculate() {
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