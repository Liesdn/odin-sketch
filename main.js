let color = 'black'
let currentSize = 16;

const blackBtn = document.getElementById('blackBtn');
const randomBtn = document.getElementById('randomBtn');
const resetBtn = document.getElementById('resetBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const board = document.querySelector('.board');


// I don't know why this works, I copied it from someone else
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

resetBtn.onclick =  () => resetBoard();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)



function setCurrentSize(newSize){
    currentSize = newSize;
}

function changeSize(value){
    setCurrentSize(value);
    updateSizeValue(value);
    resetBoard();
}

function updateSizeValue(value){
    sizeValue.innerHTML = `${value} x ${value}`
}


function resetBoard(){
    clearBoard();
    makeBoard(currentSize);
}

function clearBoard(){
    board.innerHTML = '';
}


function makeBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        let div = document.createElement('div');
        div.addEventListener('mousedown', changeColor);
        div.addEventListener('mouseover', changeColor)
        board.appendChild(div);
    }
}

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if (color == 'random') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else {
        e.target.style.backgroundColor = 'black'
        }
}

function setColor(colorChoice){
    color = colorChoice;
}

window.onload = () =>{
    makeBoard(16);
    setColor('black');
}