//Create a webpage with a 16x16 grid of square divs. [ ]
let size=16;
const gridSpace = document.querySelector(".content"); //Selects the content class in the document
const buttons = document.querySelector(".buttons");
const resetBTN = document.createElement('button')
resetBTN.classList.add('reset')
resetBTN.textContent='Reset?';
resetBTN.addEventListener('click',()=>{
    reset();
})
buttons.appendChild(resetBTN)
function reset(){
    while(gridSpace.firstChild){
        document.querySelector('.row').remove()
    }
    let size = 0;
    while ((size<1) || (size>100)){
        size= parseInt(prompt("How big should the new square be? Pick a number between 1 and 100: "));
    }
    createGrid(size);
}
function createGrid(size){
    for (let i = 0; i<size; i++){ //first loop for rows, need to append columns created on the bottom
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j<size; j++){ //second loop for columns, need to create all 16 divs
            const column = document.createElement("div");
            column.classList.add("box");
            column.style.backgroundColor="white";
            column.addEventListener("mouseover",()=>{
                column.style.backgroundColor="black";
            })
            row.appendChild(column);
        }
        gridSpace.appendChild(row);

    }
}
createGrid(size);

/*Opacity, change the white and black part of the loop for:
          let opacity=0;
            column.classList.add("box");
            column.style.backgroundColor="black";
            column.style.opacity=opacity;
            column.addEventListener("mouseover",()=>{
                opacity=opacity+0.1;
                column.style.opacity=opacity;
*/

/* Randomize colour: opacity as before, but need 3 randomized values
red:0-99,green:0-99,blue:0-99. convert to #RRGGBB and add the opacity at the end #RRGGBBOO;
can also leave the opacity on it's own.
function twoDigits(){
    let number=Math.round(100*Math.random());
    let str='';
    if(number<10){
        str='0'+String(number)
    } else{
        str= String(number)
    }
    return(str);
}
let rGB=twoDigits()+twoDigits()+twoDigits();
*/ 