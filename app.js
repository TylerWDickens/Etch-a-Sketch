//Use query selectors to set grid container and button to const
const gridContainer = document.querySelector('#grid-container');
const resizeButton = document.querySelector("#change-button");
const resetButton = document.querySelector("#reset-button");

//run setDefaultGrid on loading page
window.addEventListener("load", setDefaultGrid);
//run changeSize when you click the button
resizeButton.addEventListener("click", changeSize);
resetButton.addEventListener("click", resetGrid);

//run setGridSize and fillGrid - set default size to 16
function setDefaultGrid(){
  gridSize(16);
  createGrid(16);
}

//set grid colomn size
function gridSize(size){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//
function createGrid(size){
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

function changeSize() {
  let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-100 range");
      changeSize();
    } else{
      clearGrid();
      gridSize(newSize);
      createGrid(newSize);
      gridBorder(newSize);
    };
  };
};

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
};

function resetGrid(){
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    element.style.backgroundColor = "white";
  })
}

function gridBorder(size){
  if(size>=50){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      element.style.borderStyle = "none";
    })}else{
      const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      element.style.borderStyle = "solid";
    })}
  }
