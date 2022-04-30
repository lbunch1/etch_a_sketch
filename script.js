//name variables to generate divs for grid
let gridSize = 16;
let activeColor = 'black';
const container = document.querySelector('.container');

let drawActive = false;

const startDraw = function() {
    container.addEventListener("mousedown", function() {
        drawActive = true;
        listener();
    })
}
const stopDraw = function() {
    window.addEventListener("mouseup", function() {
        drawActive = false;
        listener();   
    })
}

let colorIndicator = document.querySelector(".active-color")

//function to change div background color on mouseover

const listener = function() {
    const elements = document.querySelectorAll('.grid-item');
    elements.forEach(element => {
        element.addEventListener("mousedown", function() {
            this.style.backgroundColor = activeColor;            
        })
        element.addEventListener("mouseover", function () {
            if(drawActive){
                this.style.backgroundColor = activeColor;
            }
        });
    })
}

//function to generate grid based on gridSize
const createGrid = function(size) {
    for (let i=0; i<size; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        container.appendChild(gridColumn);
        for (let i=0; i<size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.setAttribute("id","grid-item");
            gridColumn.appendChild(gridItem);
        };
    };
}

window.onload = createGrid(gridSize);
//window.onload = listener();
window.onload = startDraw();
window.onload = stopDraw();


//function to clear grid, take user input, and generate new grid

const genGrid = function() {
    const input = document.getElementById("grid_size_in").value
    if (input > 100) {
        alert('Slow down bro, most I can do is 100')
    } else {
        gridSize = input;
        container.innerHTML = "";
        createGrid(gridSize);
        listener();
    }
}

const input = document.getElementById("grid_size_in");
input.addEventListener("keypress",function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("grid_size_btn").click();
    }
} )

const setColor = function(color) {
    activeColor = color;
    colorIndicator.style.backgroundColor = activeColor;
}