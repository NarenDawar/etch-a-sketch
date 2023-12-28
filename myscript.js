const container = document.querySelector("#container");
let vars;
function createGrid(param) {
    for(let i = 0; i < param; i++) {
        for(let j = 0; j < param; j++) {
            const element = document.createElement('div');
            element.classList.add('box');
            container.appendChild(element);
        }
        vars = document.createElement('hr');
        vars.classList.add('hr');
        container.appendChild(vars);
    }
}


let num_of_pixels = prompt('Enter the dimension you want for the drawing. Max is 100 and the min is 5.');
while(num_of_pixels > 100 || num_of_pixels < 5) {
    num_of_pixels = prompt('Enter a number within the guidelines:');
}
createGrid(num_of_pixels);
let boxes = (document.querySelectorAll('.box'));
boxes.forEach(
    function(box) {
        box.addEventListener('mousemove', function(e) {
            e.target.style.background = 'black';
        })
    }
);
