//Create a webpage with a 16x16 grid of square divs. [ ]
let size=16; // Using let to be able to modify it in the future if we want to change the size/resolution
const gridSpace = document.querySelector(".content"); //Selects the content class in the document
const createDiv = document.createElement("div"); //creates div
let array= [];
for (let i = 0; i<size; i++){ //first loop for rows, need to append columns created on the bottom
    let subarray=[];
    for (let j = 0; j<size; j++){ //second loop for columns, need to create all 16 divs
        subarray.push([i, j])
    }
    array.push(subarray);
}
console.table(array[1]);