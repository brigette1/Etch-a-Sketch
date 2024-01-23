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

        if (gridContainer.classList.contains('one')) {
            gridContainer.classList.remove('one');
        } else if (gridContainer.classList.contains('four')) {
            gridContainer.classList.remove('four');
        } else if (gridContainer.classList.contains('nine')) {
            gridContainer.classList.remove('nine'); 
        } else if (gridContainer.classList.contains('sixteen')) {
            gridContainer.classList.remove('sixteen');
        } 

        if (size == 100) {
            gridContainer.classList.add('one'); 
        } else if (size == 400) {
            gridContainer.classList.add('four'); 
        } else if (size == 900) {
            gridContainer.classList.add('nine'); 
        } else if (size == 1600) {
            gridContainer.classList.add('sixteen')
        }

        gridContainer.appendChild(newDiv); 
        
    }

}


//function to add color to boxes 
function colorBoxes(event) {
    if (event.target.classList.contains('boxes')) {
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
    const boxes = document.querySelectorAll('.boxes'); 
    boxes.forEach(box => {
        box.classList.remove('permaHover');
    })
})

