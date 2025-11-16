//Create a webpage with a 16x16 grid of square divs. [ ]
const gridSpace = document.querySelector(".content"); //Selects the content class in the document
const buttons = document.querySelector(".buttons");
const reset = document.createElement('button')
reset.classList.add('reset')
reset.textContent='Reset?';
reset.addEventListener('click',(e)=>{
    console.log('reset');
})
buttons.appendChild(reset)

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
createGrid(16);
