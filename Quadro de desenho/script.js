let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');


ctx.strokeStyle = currentColor;
ctx.lineWidth = 5;
ctx.lineCap = 'round';


document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});


screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);


document.querySelector('.clear').addEventListener('click', clearCanvas);

function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
    
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
    
    ctx.strokeStyle = currentColor;
}

function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX - screen.offsetLeft, e.pageY - screen.offsetTop);
    }
}

function mouseUpEvent() {
    canDraw = false;
}

function draw(x, y) {
    let pointX = x;
    let pointY = y;
    
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.stroke();
    
    mouseX = pointX;
    mouseY = pointY;
}

function clearCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}