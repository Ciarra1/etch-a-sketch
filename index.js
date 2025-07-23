let gridSize;
const generateGridBtn = document.querySelector(".generate-grid-btn");
const gridDiv = document.querySelector(".grid-container-div");
function generateGrid(){
    generateGridBtn.addEventListener("click", function () {
        gridSize = getGridSize();
        if(gridSize){

            gridDiv.innerHTML = "";
            console.log(gridSize);
            const gridWidth = 450;
            let borderSize = 2;
            const boxSize = (gridWidth - (gridSize * borderSize * 2)) / gridSize;


            gridDiv.style.width = gridWidth +"px";
            gridDiv.style.height = gridWidth +"px";
            for(let i = 0; i < gridSize * gridSize; i++){
                
            const squares = document.createElement("div");
            squares.style.width = boxSize + "px";
            squares.style.height = boxSize + "px";
            squares.style.border = borderSize + "px solid black"; 


            gridDiv.appendChild(squares);
            }
        } else {
            alert("Missing grid size");
        }
    })
}
function getGridSize(){
    return parseInt(document.getElementById("grid-size").value);
    
}

function start(){
    generateGrid();
}


start();