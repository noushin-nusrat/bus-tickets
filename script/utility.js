function getInnerTextValueFromId(elementId) {
    const element = document.getElementById(elementId)
    elementValue = parseInt(element.innerText)
    return elementValue
}

function getInnerTextFromId(elementId) {
    const element = document.getElementById(elementId)
    elementText = element.innerText
    return elementText
}


function setInnerTextWithIdAndValue(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}


function getInputValueFromId(elementId) {
    const element = document.getElementById(elementId)
    elementValue = element.value
    return elementValue
}