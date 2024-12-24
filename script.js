
function calculateTriangle() {
    const base  = getInputValue('base');
    const height = getInputValue('height');
    const area = 0.5 * base * height;

    setInnerValue('show-result', area);
}

function calculateRectangular(){
    const baseRec = getInputValue('rec');
    const heightRec = getInputValue('height-rec');
    const areaRec = baseRec * heightRec;

    setInnerValue('show-result-rec', areaRec);
}

function calculateParallelogram(){
    const basePar = getInputValue('base-p');
    const heightPar = getInputValue('height-p');
    const areaPar = basePar * heightPar;

    setInnerValue('show-result-p', areaPar);
}

function calculateRhombus(){
    const d1 = getInputValue('base-rhom');
    const d2 = getInputValue('height-rhom');
    const areaRh = 0.5 * d1 * d2;

    setInnerValue('show-result-rhym', areaRh);
}

function calculatePentagon(){
    const p = getInputValue('base-penta');
    const a = getInputValue('height-penta');
    const areaPenta = 0.5 * p * a;

    setInnerValue('show-result-penta', areaPenta);
}

function calculateEllipse(){
    const a = getInputValue('base-elip');
    const b = getInputValue('height-elip');
    const areaEll = (Math.PI * a * b).toFixed(2);

    setInnerValue('show-result-elip', areaEll);
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


const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
