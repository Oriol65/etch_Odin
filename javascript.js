//Create a webpage with a 16x16 grid of square divs. [ ]
let color=false;
let grayscale=false;
let size=16;
const pxHeight = 960;
const gridSpace = document.querySelector(".content"); //Selects the content class in the document
const buttons = document.querySelector(".buttons");
const resetBTN = document.createElement('button')
resetBTN.classList.add('reset')
resetBTN.textContent='Reset?';
resetBTN.addEventListener('click',()=>{
    reset();
})
const colorBTN = document.createElement('button')
colorBTN.classList.add('color')
colorBTN.textContent='Color?';
colorBTN.addEventListener('click',()=>{
    color=true;
})
const grayscaleBTN = document.createElement('button')
grayscaleBTN.classList.add('grayscale')
grayscaleBTN.textContent='Light to Dark?';
grayscaleBTN.addEventListener('click',()=>{
    grayscale=true;
})
buttons.appendChild(resetBTN);
buttons.appendChild(colorBTN);
buttons.appendChild(grayscaleBTN);
function reset(){
    color=false;
    grayscale=false;
    while(gridSpace.firstChild){
        document.querySelector('.row').remove()
    }
    let size = 0;
    while ((size<1) || (size>100)){
        size= parseInt(prompt("How big should the new square be? Pick a number between 1 and 100: "));
    }
    createGrid(size);
}
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
function createGrid(size){
    let boxsize=String(pxHeight/size)+'px';
    for (let i = 0; i<size; i++){ //first loop for rows, need to append columns created on the bottom
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j<size; j++){ //second loop for columns, need to create all 16 divs
            let opacity=0;
            const column = document.createElement("div");
            column.classList.add("box");
            column.style.height=boxsize;
            column.style.width=boxsize;
            column.style.backgroundColor="white";
            if (grayscale){
                column.style.opacity=opacity;
            }
            column.addEventListener("mouseover",()=>{
                if (grayscale){
                    opacity=opacity+0.1;
                    column.style.opacity=opacity;
                }
                if (color){
                    let rGB='#'+twoDigits()+twoDigits()+twoDigits();
                    column.style.backgroundColor=rGB;
                } else{
                    column.style.backgroundColor="black";
                }
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

