let displayUp = document.getElementById("display-up")
let displayDown = document.getElementById("display-down")
let displayMiddle = document.getElementById("display-middle")

function formatNumber(num) {
    return num.toLocaleString('it-IT');
}

//              Utility Buttons                //
function clearDisplay() {
    displayUp.textContent = ""
    displayMiddle.textContent = ""
    displayDown.textContent = 0
}

function canc() {
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
}

//              Number Buttons                //
function type1() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "1"
    } else {
        displayDown.textContent += "1"
    }
    displayDown.textContent = formatNumber(parseFloat(displayDown.textContent));
}

function type2() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "2"
    } else {
        displayDown.textContent += "2"
    }
}

function type3() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "3"
    } else {
        displayDown.textContent += "3"
    }
}

function type4() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "4"
    } else {
        displayDown.textContent += "4"
    }
}

function type5() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "5"
    } else {
        displayDown.textContent += "5"
    }
}

function type6() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "6"
    } else {
        displayDown.textContent += "6"
    }

}

function type7() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "7"
    } else {
        displayDown.textContent += "7"
    }
}

function type8() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "8"
    } else {
        displayDown.textContent += "8"
    }
}

function type9() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "9"
    } else {
        displayDown.textContent += "9"
    }
}

function type0() {
    if (displayDown.textContent === "0") {
        displayDown.textContent = "0"
    } else {
        displayDown.textContent += "0"
    }
}

function typeComma() {
    if (!displayDown.textContent.includes(",")) {
        if (displayDown.textContent === "0") {
            displayDown.textContent = "0,"
        } else {
            displayDown.textContent += ","
        }
    }
}

//              Operator Buttons                //

function typeDivide() {
    displayMiddle.textContent = "÷"
    displayUp.textContent = displayDown.textContent
    displayDown.textContent = "0"
}

function typeMultiply() {
    displayMiddle.textContent = "x"
    displayUp.textContent = displayDown.textContent
    displayDown.textContent = "0"
}

function typeSubtract() {
    displayMiddle.textContent = "-"
    displayUp.textContent = displayDown.textContent
    displayDown.textContent = "0"
}

function typeAdd() {
    displayMiddle.textContent = "+"
    displayUp.textContent = displayDown.textContent
    displayDown.textContent = "0"
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
}

function typePlusMinus() {
    let firstChar = displayDown.textContent
    if (firstChar.startsWith("-")) {
        displayDown.textContent = firstChar.slice(1);
    } else {
        displayDown.textContent = "-" + firstChar;
    }
}
