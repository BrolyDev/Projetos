document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

function dragStart(e) {
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const draggedElement = document.querySelector('.dragging');
    if (draggedElement && e.currentTarget.classList.contains('area')) {
        e.currentTarget.appendChild(draggedElement);
    }
}