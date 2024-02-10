const gridContainer = document.querySelector('.grid-container')

let gridDimension = 16;

function createSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    return square;
}

function createRow(){
    const row = document.createElement('div');
    row.classList.add('row');
    let gridSquare = createSquare();
    for(let i=0; i < gridDimension; i++){
        row.appendChild(gridSquare.cloneNode());
    }
    return row;
}

function populateGrid(){
    for(let i=0; i < gridDimension; i++){
        gridContainer.appendChild(createRow())
    }
}

function changeColor(element){
    element.style.backgroundColor = 'black'
}

window.addEventListener('load', populateGrid)

gridContainer.addEventListener('mouseover', (event) => {
    if(event.target.classList.value === "square"){
        changeColor(event.target)
    }
})

function clearGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function isValidSize(inputtedSize){
    return inputtedSize > 0 && inputtedSize <= 100 && Number.isInteger(inputtedSize)
}

const changeGridButton = document.querySelector('.change-grid')

changeGridButton.addEventListener('click', () => {
    clearGrid();
    let newGridSize = Number(window.prompt('How many squares per side from 0-100?'));
    if(isValidSize(newGridSize)){
        gridDimension = newGridSize;
        populateGrid();
    }else{
        alert('Error - please enter a whole number, between 0-100');
    }
})

const clearGridButton = document.querySelector('.clear-grid')

clearGridButton.addEventListener('click', () => {
    clearGrid();
    populateGrid();
})


