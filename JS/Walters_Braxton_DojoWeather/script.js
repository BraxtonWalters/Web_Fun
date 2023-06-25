function loadingAlert(element) {
    alert(`Loading weather for the city of ${element.innerText}.`)
}

function cookieDismiss(element) {
    document.getElementById(element).remove()
}

// creating arr of  
const tempArr = document.querySelectorAll(".temp");
let currentUnit = "c";



// tempChanger is called from the select dropdown and we are passing the value of the selected option.
function tempChanger(option) {
    // traverse through the tempArr.innertext to get the current temp from all the p tags.
    for (let i = 0; i < tempArr.length; i++) {
        // creating a new variable and setting to the current index of tempArr. Then we get the innerText of the index and we parseFloat. Two reasons for the parseFloat. First to grab only the number and second not just the whole number but the decimals as well. 
        let temp = parseFloat(tempArr[i].innerText);
        // Now we do an if check to see if the option is equal to the string of f. 
        if (option === "f") {
            // If it is we take the temp var and set it equal to the formula below. This is the formula for converting °F to °C. 
            temp = Math.round((temp * 9 / 5) + 32);
            // The else is to catch if the option is set to the string c.
        } else {
            // If it is c then we set the temp var equal to the formula below. This is the formula for converting °C to °F.
            temp = Math.round((temp - 32) * 5 / 9);
        }
        // After all that we can the current index of tempArr and set its innerText equal to a template literal with the temp var and the ° symbol.
        tempArr[i].innerText = `${temp}°`;
    }
}



// k = c + 273.15
// k = (f + 459.67) * 5 / 9









// user clicks option f the string of f get passed through
// to our function.
// if check to see what the val is
// if the val is c run a loop to change vals into c
// if the val is f run a loop to change vals into f

// f = (c * 9 / 5) + 32

// c = (f - 32) * 5 / 9

