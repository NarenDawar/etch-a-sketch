const container = document.querySelector("#container");
function createGrid(param) {
    for(let i = 0; i < param; i++) {
        for(let j = 0; j < param; j++) {
            const element = document.createElement('div');
            element.textContent = "Box";
            element.classList.add('box');
            container.appendChild(element);
        }    
    }
}

createGrid(4);

