//functions to create the divs
const boxes = document.querySelectorAll('.boxes'); 
const gridContainer = document.getElementById('grid-container');
const gridBtn = document.querySelectorAll('.gridnum'); 

gridBtn.forEach(button => button.addEventListener('click', event => {
    const size = parseInt(button.textContent);
    createBoxes(size);
}))

function createBoxes(size) {
    const previousGrid = gridContainer.querySelectorAll('.boxes');
    previousGrid.forEach((element) => {
        element.remove();
    });

    for (let i = 0; i < size; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('boxes');
        gridContainer.appendChild(newDiv); 
    }
}


//function to add color to boxes 
function colorBoxes(event) {
    if (event.target.className == 'boxes') {
        let target = event.target; 
        target.classList.add('permaHover');
    }
}

//Colors applied when user drags mouse 
document.addEventListener('mousedown', event => {
    document.addEventListener('mouseover', colorBoxes);
})

document.addEventListener('mouseup', event => {
    document.removeEventListener('mouseover', colorBoxes);
})

//reset board button
const resetBtn = document.querySelector('.reset'); 

resetBtn.addEventListener('click', event => {
    boxes.forEach(box => {
        box.classList.remove('permaHover');
    })
})

