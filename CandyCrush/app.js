document.addEventListener('DOMContentLoaded', () => {
    const grid =document.querySelector('.grid');
    const width =8;
    const squares=[];


    let candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ]
    // Create Board
function createBoard() {
 for(let i=0; i < width* width ;i++){
    const square = document.createElement('div');
    square.setAttribute('draggable',true);
    let randomColors = Math.floor(Math.random() * candyColors.length);
    square.style.backgroundColor = candyColors[randomColors];
   grid.appendChild(square);
   squares.push(square);
 }
}
createBoard();


// drag the candies
let colorBeingDragged;
let colorBeingReplaced;
let squareIdBeingDragged;
let squareIdBeingReplaced;

squares.forEach(square => square.addEventListener('dragstart',dragStart));
squares.forEach((square) => square.addEventListener("dragend", dragEnd));
squares.forEach((square) => square.addEventListener("dragover", dragOver));
squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
squares.forEach((square) => square.addEventListener("dragdrop", dragDrop));

function dragStart(e){
    e.preventDefault();
    colorBeingDragged =this.style.backgroundColor;
    squareIdBeingDragged = parseInt(this.id);
    // console.log(colorBeingDragged);
    // console.log(squareIdBeingDragged);
    console.log(this.id,'dragstart');
}

function dragOver() {
  console.log(this.id, "dragover");
}

function dragEnter() {
  console.log(this.id, "dragenter");
}

function dragLeave() {
  console.log(this.id, "dragleave");
}

function dragDrop() {
  console.log(this.id, "dragdrop");
  colorBeingReplaced =this.style.backgroundColor;
  squareIdBeingReplaced=parseInt(this.id);
  this.style.backgroundColor=colorBeingDragged;
  squares[squareIdBeingDragged].style.backgroundColor =colorBeingReplaced;
}

function dragEnd() {
  console.log(this.id, "dragend");
}


})