const container = document.querySelector('#container');

function makeGrid(size) {
    for (let r = 1; r <= size; r++) {
        const row = document.createElement('span');
        for (let i = 1; i <= size; i++) {
            const grid = document.createElement('span');
            // grid.style.border = "1px solid black";
            grid.classList.add('grid');

            container.appendChild(grid);
        }
        row.classList.add('row');
        container.appendChild(row);
    }
}

makeGrid(20);

const pixel = document.querySelectorAll('.grid').forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('hover');
    });
});

const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.hover').forEach(pixel => {
        pixel.classList.remove('hover');
    });
});
