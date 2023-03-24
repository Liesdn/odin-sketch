const grid = document.querySelector('grid');
const blackBtn = document.getElementById('blackBtn');
const randomBtn = document.getElementById('randomBtn');
const resetBtn = document.getElementById('resetBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = 'black'
        });
        grid.insertAdjacentElement('beforeend', div);
    }
}

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'random') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else {
        e.target.style.backgroundColor = 'black';
    }
}

function getSize() {

}


makeGrid();