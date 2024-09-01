const colorButton = document.querySelector(".color-button");
const gridButton = document.querySelector(".grid-button");
const eraseButton = document.querySelector(".erase-button");
const gridContainer = document.querySelector(".grid-container");
const div = document.createElement("div");
const gridSize = 420;
let squaresPerSide = 16;
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

function createGrid (squaresPerSide) {
    let squareSize = (gridSize/squaresPerSide)+"px";
    div.style.height = squareSize;
    div.style.width = squareSize;
    for(let i = 0; i < (squaresPerSide*squaresPerSide); i++) {
        gridContainer.appendChild(div.cloneNode(true));
    }
    draw();
}

function draw() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mousemove", () => {
            if (mouseDown) {
                colorMode(square);
            }
        })
        square.addEventListener("click", () => {
            colorMode(square);    
        })
});
}

function randomColor () {
    return Math.floor(Math.random() * 255);
}

function colorMode (element) {
    if(colorButton.innerText === "rainbow mode") {
        element.style.backgroundColor = "black";
    } else if(colorButton.innerText === "black") {
        element.style.backgroundColor =
        "rgb("+randomColor()+","+randomColor()+","+randomColor()+")";
    }
}

function removeFirstGrid(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
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
    createGrid(squaresPerSide);
})

eraseButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
            square.style.backgroundColor = "#ebe7e7";
        })
});

colorButton.addEventListener("click",(e)=> {
    if (e.target.innerText === "rainbow mode") {
        colorButton.textContent = "black";
    } else if (e.target.innerText === "black") {
        colorButton.textContent = "rainbow mode";
    }
    draw();
})

createGrid(squaresPerSide);