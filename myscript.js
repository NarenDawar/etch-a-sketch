let container = document.querySelector('#container');

function createGrid(param) {
    for(let i = 0;i < param*param; i++) {
        const element = document.createElement('div');
        element.classList.add('box');
        const boxSize = 500/param;
        element.style.height = boxSize + 'px';
        element.style.width = boxSize + 'px';
        element.onmouseover = function() {
            this.style.background = 'black';
        }
        container.appendChild(element);
    }
}
    
let button1 = document.querySelector('.button');
function buttonFunc() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.remove();//removes old grid
    });
    createGrid(ask());
}

function ask() {
    let num_of_pixels = prompt('Enter the dimension you want for the drawing. Max is 100 and the min is 5.');
    while(num_of_pixels > 100 || num_of_pixels < 5) {
        num_of_pixels = prompt('Enter a number within the guidelines:');
    }
    return num_of_pixels;
}
/*----------------------------------*/
createGrid(ask());
