const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

function calculateTriangle() {
    const base  = getInputValue('base');
    const height = getInputValue('height');
    const area = 0.5 * base * height;
    console.log(area);

    setInnerValue('show-result', area);
}

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const value = parseFloat(inputAmountText);
    inputField.value = '';
    return value;
}

function setInnerValue(elementId, area){
   const elem = document.getElementById(elementId);
   elem.innerText = area;
}