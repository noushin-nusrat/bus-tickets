function getInnerTextValueFromId(elementId) {
    const element = document.getElementById(elementId)
    elementValue = parseInt(element.innerText)
    return elementValue
}

function setInnerTextWithIdAndValue(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}