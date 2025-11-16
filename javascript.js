//Create a webpage with a 16x16 grid of square divs. [ ]
let size=16;
const gridSpace = document.querySelector(".content"); //Selects the content class in the document
const buttons = document.querySelector(".buttons");
const resetBTN = document.createElement('button')
resetBTN.classList.add('reset')
resetBTN.textContent='Reset?';
resetBTN.addEventListener('click',(e)=>{
    reset(16);
})
buttons.appendChild(resetBTN)
function reset(size){
    for (let i = 0; i<size; i++){
        document.querySelector('.row').remove()
    }
    createGrid(size)
}
function createGrid(size){
    for (let i = 0; i<size; i++){ //first loop for rows, need to append columns created on the bottom
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j<size; j++){ //second loop for columns, need to create all 16 divs
            const column = document.createElement("div");
            column.classList.add("box");
            column.style.backgroundColor="white";
            column.addEventListener("mouseover",()=>{column.style.backgroundColor="black"})
            row.appendChild(column);
        }
        gridSpace.appendChild(row);

    }
}
createGrid(size);

