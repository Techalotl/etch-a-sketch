const colorButton = document.querySelector(".color-button");
const gridButton = document.querySelector(".grid-button");
const eraseButton = document.querySelector(".erase-button");
const gridContainer = document.querySelector(".grid-container");
const div = document.createElement("div");
let squaresPerSide = 16;
const gridSize = 420;
let squareSize = (gridSize/squaresPerSide)+"px"
console.log(squareSize);
div.style.height = squareSize;
div.style.width = squareSize;
div.setAttribute("class", "square");

for(let i = 0; i < (squaresPerSide*squaresPerSide); i++) {
    gridContainer.appendChild(div.cloneNode(true));
}

function draw() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
});
}

draw();

function removeFirstGrid(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

function changeGrid(squaresPerSide) {
    squareSize = (gridSize/squaresPerSide)+"px"
    div.style.height = squareSize;
    div.style.width = squareSize;
    for(let i = 0; i < (squaresPerSide*squaresPerSide); i++) {
        gridContainer.appendChild(div.cloneNode(true));
    }
    draw();
}

gridButton.addEventListener("click", () => {
    squaresPerSide = +prompt("Enter a number between 1 and 100:", 16)
    if (squaresPerSide === null) {
        return;
    } else if (isNaN(squaresPerSide) || squaresPerSide < 1 ||
        squaresPerSide > 100) {
        alert("That's not a valid number!");
        return;
    } else if (!Number.isInteger(squaresPerSide)) {
        alert("The number must be an integer.");
        return;
    }
    removeFirstGrid(gridContainer);
    changeGrid(squaresPerSide);
})

function erase() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
            square.style.backgroundColor = "#ebe7e7";
        })
}

eraseButton.addEventListener("click", erase);