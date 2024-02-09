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