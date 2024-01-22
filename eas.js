//functions to create the divs
function createColumn() {
    for (i = 0; i < 16; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('column');
        let div = document.getElementById('grid-container');
        div.appendChild(newDiv); 
        createRow() 
    }
}

function createRow() {
    for (r = 0; r < 16; r++) {
        let row = document.createElement('div');
        row.classList.add('row'); 
        let column = document.querySelectorAll('.column'); 
        column[i].appendChild(row);
    }
}

createColumn()