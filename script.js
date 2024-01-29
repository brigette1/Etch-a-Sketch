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
        } else if (gridContainer.classList.contains('twentyfive')) {
            gridContainer.classList.remove('twentyfive');
        }

        if (size == 100) {
            gridContainer.classList.add('one'); 
        } else if (size == 400) {
            gridContainer.classList.add('four'); 
        } else if (size == 900) {
            gridContainer.classList.add('nine'); 
        } else if (size == 1600) {
            gridContainer.classList.add('sixteen');
        } else if (size == 2500) {
            gridContainer.classList.add('twentyfive');
        }

        gridContainer.appendChild(newDiv); 
        
    }

}

const controlButton = document.querySelectorAll('.control')
let currentMode = 'Default Pen';
let isDrawing = false;

controlButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        currentMode = button.textContent;
    });
});

function startDrawing(event) {
    if (event.button == 0) {
        isDrawing = true;
        pickMode(event, currentMode);
    }
}

function endDrawing() {
    isDrawing = false;
}

function handleMouseMove(event) {
    if (isDrawing) {
        pickMode(event, currentMode);
    }
}
document.addEventListener('mousedown', startDrawing);
document.addEventListener('mouseup', endDrawing);
document.addEventListener('mousemove', handleMouseMove);

function pickMode(event, currentMode) {
    switch(currentMode) {
        case 'Eraser':
            erase(event);
            break;
        case 'Rainbow Pen':
            rainbow(event);
            break;
        case 'Default Pen':
            colorBoxes(event);
            break;
        default:
            colorBoxes(event);
    }
}


//-------------------------------------------------------------------------
//function to add color to boxes 
function colorBoxes(event) {
    if (event.target.classList.contains('boxes')) {
        let target = event.target; 
        target.style.backgroundColor = '#696d7d';
    }
}

//eraser function
function erase(event) {
    if (event.target.classList.contains('boxes')) {
        let target = event.target; 
        target.style.backgroundColor = '';
    }
}

//function for rainbow pen 
function rainbow(event) {
    let color = '#';
    let letters = ['ABDEE6','CBAACB','FFFFB5','FFCCB6','F3B0C3', 
    'C6DBDA','FEE1E8','FED7C3','F6EAC2','ECD5E3',
    'FF968A','FFAEA5','FFC5BF','FFD8BE','FFC8A2',
    'D4F0F0','8FCACA','CCE2CB','B6CFB6','97C1A9',
    'FCB9AA','FFDBCC','A2E1DB','55CBCD'];
    color += letters[Math.floor(Math.random() * letters.length)];
    
    if (event.target.classList.contains('boxes')) {
        let target = event.target; 
        target.style.background = color;
    }
}


//reset board button
const resetBtn = document.querySelector('.reset'); 

resetBtn.addEventListener('click', event => {
    const boxes = document.querySelectorAll('.boxes'); 
    boxes.forEach(box => {
        box.style.backgroundColor = '';
    })
})


