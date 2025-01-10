let displayUp = document.getElementById("display-up")
let displayDown = document.getElementById("display-down")
let displayMiddle = document.getElementById("display-middle")
const maxDigits = 13
const digitsLimit = 9999999999999

function errorMessage() {
    if (displayDown.textContent.length > maxDigits) {
    displayDown.style.fontSize = "25px"
    displayDown.textContent = "Limit Exceeded!"
    }
}

function reduceFontSize() {
    if (displayDown.textContent.length > 10) {
        displayDown.style.fontSize = "24px"
    } else {
        displayDown.style.fontSize = "30px"
    }
    if (displayUp.textContent.length > 19) {
        displayUp.style.fontSize = "10px"
    } else {
        displayUp.style.fontSize = "16px"
    }
    if (displayUp.textContent.length > 19) {
        displayMiddle.style.fontSize = "10px"
    } else {
        displayMiddle.style.fontSize = "16px"
    }
} 

//              Utility Buttons                //
function clearDisplay() {
    if (!displayDown.textContent.includes("Limit Exceeded!")) {
    displayUp.textContent = ""
    displayMiddle.textContent = ""
    displayDown.textContent = 0
    reduceFontSize()
    } else {
        displayUp.textContent = ""
        displayMiddle.textContent = ""
        displayDown.textContent = 0
        displayDown.style.fontSize = "30px"
    }
}

function canc() {
    if (!displayDown.textContent.includes("Limit Exceeded!")) {
        let lastChar = displayDown.textContent
        if (displayDown.textContent === "0") {
            displayDown.textContent = "0"
        } else if (displayDown.textContent !== "0") {
            lastChar = lastChar.substring(0, lastChar.length - 1)
            displayDown.textContent = lastChar
        }
        if (displayDown.textContent.trim() === "") {
            displayDown.textContent = "0"
        }
        reduceFontSize()
    }
}

function typeResult() {
    if (displayMiddle.textContent === "÷") {
        numUp = parseFloat(displayUp.textContent)
        numDown = parseFloat(displayDown.textContent)
        displayUp.textContent = numUp + "÷" + numDown
        displayMiddle.textContent = "="
        let result = numUp / numDown
        displayDown.textContent = result
    } else if (displayMiddle.textContent === "x") {
        numUp = parseFloat(displayUp.textContent)
        numDown = parseFloat(displayDown.textContent)
        displayUp.textContent = numUp + "x" + numDown
        displayMiddle.textContent = "="
        let result = numUp * numDown
        displayDown.textContent = result
    } else if (displayMiddle.textContent === "-") {
        numUp = parseFloat(displayUp.textContent)
        numDown = parseFloat(displayDown.textContent)
        displayUp.textContent = numUp + "-" + numDown
        displayMiddle.textContent = "="
        let result = numUp - numDown
        displayDown.textContent = result
    } else if (displayMiddle.textContent === "+") {
        numUp = parseFloat(displayUp.textContent)
        numDown = parseFloat(displayDown.textContent)
        displayUp.textContent = numUp + "+" + numDown
        displayMiddle.textContent = "="
        let result = numUp + numDown
        displayDown.textContent = result
    } 
    reduceFontSize()
    errorMessage()
}

//              Number Buttons                //
function type1() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "1"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "1"
    }
    reduceFontSize()
}

function type2() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "2"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "2"
    }
    reduceFontSize()
}

function type3() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "3"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "3"
    }
    reduceFontSize()
}

function type4() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "4"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "4"
    }
    reduceFontSize()
}

function type5() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "5"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "5"
    }
    reduceFontSize()
}

function type6() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "6"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "6"
    }
    reduceFontSize()
}

function type7() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "7"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "7"
    }
    reduceFontSize()
}

function type8() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "8"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "8"
    }
    reduceFontSize()
}

function type9() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "9"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "9"
    }
    reduceFontSize()
}

function type0() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "0"
    } else if(displayDown.textContent.length < maxDigits) {
        displayDown.textContent += "0"
    }
    reduceFontSize()
}

function typeComma() {
    if (!displayDown.textContent.includes(".")) {
        if (displayDown.textContent === "0") {
            displayDown.textContent = "0."
        } else if(displayDown.textContent.length < maxDigits) {
            displayDown.textContent += "."
        }
    }
    reduceFontSize()
}

//              Operator Buttons                //

function typeDivide() {
    if (!displayDown.textContent.includes("Limit Exceeded!")) {
        displayMiddle.textContent = "÷"
        displayUp.textContent = displayDown.textContent
        displayDown.textContent = "0"
        reduceFontSize()
    }
}

function typeMultiply() {
    if (!displayDown.textContent.includes("Limit Exceeded!")) {
        displayMiddle.textContent = "x"
        displayUp.textContent = displayDown.textContent
        displayDown.textContent = "0"
        reduceFontSize()
    }
}

function typeSubtract() { 
    if (!displayDown.textContent.includes("Limit Exceeded!")) {
        displayMiddle.textContent = "-"
        displayUp.textContent = displayDown.textContent
        displayDown.textContent = "0"
        reduceFontSize()
    }
}

function typeAdd() {
    if (!displayDown.textContent.includes("Limit Exceeded!")) {
        displayMiddle.textContent = "+"
        displayUp.textContent = displayDown.textContent
        displayDown.textContent = "0"
        reduceFontSize()
    }
}

function typePercentage() {
    if (displayMiddle.textContent === "÷" ||
        displayMiddle.textContent === "x" ||
        displayMiddle.textContent === "-" ||
        displayMiddle.textContent === "+") {
        resultPercentage = displayDown.textContent * displayUp.textContent
        resultPercentage /= 100
        displayUp.textContent += displayMiddle.textContent + resultPercentage
        displayDown.textContent = resultPercentage
    }
    reduceFontSize()
}

function typePlusMinus() { 
    if (!displayDown.textContent.includes("Limit Exceeded!")) {
        let firstChar = displayDown.textContent
        if (firstChar.startsWith("-")) {
            displayDown.textContent = firstChar.slice(1);
        } else {
            displayDown.textContent = "-" + firstChar;
        }
        reduceFontSize()
    }
}
