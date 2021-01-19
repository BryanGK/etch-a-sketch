const container = document.querySelector('#container');




function makeGrid(size) {
    for (let r = 1; r <= size; r++) {
        const row = document.createElement('div');
        for (let i = 1; i <= size; i++) {
            const grid = document.createElement('div');
            grid.style.border = "1px solid black";
            grid.classList.add('grid');

            container.appendChild(grid);
        }
        row.classList.add('row');
        container.appendChild(row);
    }
}



// function setGridSize(size) {
//     container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
// }

// setGridSize(5);
makeGrid(20);

const pixel = document.querySelectorAll('div');

pixel.addEventListener('click', () => {
    pixel.forEach
});