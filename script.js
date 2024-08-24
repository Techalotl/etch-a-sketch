const colorButton = document.querySelector(".color-button");
const gridButton = document.querySelector(".grid-button");
const eraseButton = document.querySelector(".erase-button");
const gridContainer = document.querySelector(".grid-container");
let squaresPerSide = 3;
let totalSquares = squaresPerSide * squaresPerSide
const gridSize = 420;
let squareSize = (gridSize/squaresPerSide)+"px";
console.log(squareSize);
console.log(totalSquares);
const div = document.createElement("div");


function createGrid (numberOfSquares) {
    for(let i = 0; i < numberOfSquares; i++) {
        div.style.height = squareSize;
        div.style.width = squareSize;
        div.style.border = " 1px solid white";
        gridContainer.appendChild(div.cloneNode(true));
    }
}

gridButton.addEventListener("click", () => {
    squaresPerSide = prompt("Enter a number between 1 and 100:", 16)
    if (squaresPerSide === null || isNaN(squaresPerSide) === true ||
        squaresPerSide < 1 || squaresPerSide > 100) {
        alert("That's not a valid number!");
        squaresPerSide = 16;
    }
    console.log(squaresPerSide);
    createGrid(squaresPerSide);
})

document.addEventListener("load", createGrid(totalSquares));