//Use query selectors to set grid container and button to const
const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector("#reset.button");

//run setDefaultGrid on loading page
window.addEventListener("load", setDefaultGrid);
//run changeSize when you click the button
resetButton.addEventListener("click", changeSize);

//run setGridSize and fillGrid - set default size to 16
function setDefaultGrid(){
  setGridSize(16);
  fillGrid(16);
}

//set grid colomn size
function setGridSize(size){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//
function fillGrid(size){
  //for each element, create a div and give class
  //add event listener for "mouseover" which triggers a colour 
  //change fucntion, then append the element to the grid container
  for (let i =0; i < (size * size); i++){
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changeColor(e){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
}

function changeSize(){
  let newSize = prompt("Enter a grid size");

  if(newSize !== null) {
    newSize = parseInt(newSize);

    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)){
      alert("Enter a number from 1-64");
      changeSize();
    }else{
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

function clearGrid(){

  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);

  })
}