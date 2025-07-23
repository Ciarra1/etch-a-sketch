
const generateGridBtn = document.querySelector(".generate-grid-btn");
const gridDiv = document.querySelector(".grid-container-div");
function createGrid(gridSize){
        
        if(gridSize){

            gridDiv.innerHTML = "";

            const gridWidth = 650;
            let borderSize = 2;
            const boxSize = (gridWidth - (gridSize * borderSize * 2)) / gridSize;


            gridDiv.style.width = gridWidth +"px";
            gridDiv.style.height = gridWidth +"px";
            for(let i = 0; i < gridSize * gridSize; i++){
                
            const squares = document.createElement("div");
            squares.style.width = boxSize + "px";
            squares.style.height = boxSize + "px";
            squares.style.border = borderSize + "px solid black"; 
            hoverEffect(squares);
            gridDiv.appendChild(squares);

            }
        } else {
            alert("Missing grid size");
        }
}
function getOpacityLevel() {
    const opacityLevel = (document.getElementById("opacity-level").value);
    return opacityLevel ? parseFloat(opacityLevel) / 100 : NaN;
}
function hoverEffect(squares){
    let currentOpacity = 0.0;
    squares.addEventListener("mouseover", function(){
    let opacityLevel = getOpacityLevel();
    console.log(opacityLevel);
    if(currentOpacity > 1){
        currentOpacity = 1;
    }
    if(!isNaN(opacityLevel)){
        squares.style.backgroundColor = "rgba(0, 0, 0, " + opacityLevel + ")";
    
    } else{
        currentOpacity += 0.15;
        squares.style.backgroundColor = "rgba(0, 0, 0, " + currentOpacity + ")";
    }
    })
}

function clearGrid(){
    const clearBtn = document.querySelector(".clear-grid-btn");
    clearBtn.addEventListener("click", function(){
        const squares = document.querySelectorAll(".grid-container-div div");
        squares.forEach(square => {
            square.style.backgroundColor = "";

        })
    })
}

function getGridSize(){
    return parseInt(document.getElementById("grid-size").value);
}

function start(){
    generateGridBtn.addEventListener("click", function(){
        createGrid(getGridSize());
        clearGrid();
    })
}
createGrid(10)
start();