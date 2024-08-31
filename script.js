const colorButton = document.querySelector(".color-button");
const gridButton = document.querySelector(".grid-button");
const eraseButton = document.querySelector(".erase-button");
const gridContainer = document.querySelector(".grid-container");
const div = document.createElement("div");
const gridSize = 420;
let squaresPerSide = 16;
let squareSize = (gridSize/squaresPerSide)+"px"
div.style.height = squareSize;
div.style.width = squareSize;
div.setAttribute("class", "square");

// so the drawing doesn't start just by passing the mouse over
//and the pixelated trail can be seen:
let mouseDown = false;
gridContainer.addEventListener("mousedown", () => {
    mouseDown = true;
})
gridContainer.addEventListener("mouseup", () => {
    mouseDown = false;
})

for(let i = 0; i < (squaresPerSide*squaresPerSide); i++) {
    gridContainer.appendChild(div.cloneNode(true));
}

function draw() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (mouseDown) {
                if(colorButton.innerText == "rainbow mode") {
                    square.style.backgroundColor = "black";
                } else if(colorButton.innerText == "rainbow mode off") {
                    square.style.backgroundColor = "rgb("+randomColorNumber()+","+randomColorNumber()+","+randomColorNumber()+")";
                }
            }
        })
});
}

function randomColorNumber () {
    return Math.floor(Math.random() * 255);
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
    } else if (squaresPerSide < 1 ||
        squaresPerSide > 100) {
        alert("That's not a valid number!");
        return;
    } else if (!Number.isInteger(squaresPerSide)) {
        alert("The number must be an integer.");
        return;
    } else if (isNaN(squaresPerSide)) {
        alert("Only numbers, please.");
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

colorButton.addEventListener("click",(e)=> {
    if (e.target.innerText === "rainbow mode") {
        colorButton.textContent = "rainbow mode off";
        colorButton.style.boxShadow = "0px 0px 0px 0px";
    } else if (e.target.innerText === "rainbow mode off") {
        colorButton.textContent = "rainbow mode";
        colorButton.style.boxShadow = "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px";
    }
    draw();
})