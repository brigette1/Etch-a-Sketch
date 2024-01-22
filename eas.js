//functions to create the divs
function createBoxes() {
    for (i = 0; i < 400; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('boxes');
        let div = document.getElementById('grid-container');
        div.appendChild(newDiv); 
    }
}

createBoxes()

//add event listeners 

const boxes = document.querySelectorAll('.boxes'); 

document.addEventListener('mouseover', function(event) {
    if (event.target.className == 'boxes') {
          let target = event.target;
          target.classList.add('permahover');
    }
  });