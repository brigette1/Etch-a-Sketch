//functions to create the divs

function createBoxes() {
    for (let i = 0; i < 400; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('boxes');
        let div = document.getElementById('grid-container');
        div.appendChild(newDiv); 
    }
}

createBoxes()

//add event listeners for hover effect
const boxes = document.querySelectorAll('.boxes'); 

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

