const gridContainer = document.querySelector('#gridContainer');
const rows = 25;
const cols = 25;
let grid = {};

const printGrid = () => {
    console.log('print');
    
    // Clear the previous grid
    gridContainer.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');

        for (let j = 0; j < cols; j++) {
            let cellEl = document.createElement('p');
            cellEl.classList.add('gridCell');
            
            let cellName = 'cell' + i + '-' + j;

            if (!grid[cellName]) {
                grid[cellName] = {
                    enabled: false,
                    paused: false,
                    timerValue: 0
                };
            }

            // Check if the cell is enabled
            if (grid[cellName].enabled) {
                cellEl.classList.add('cellEnabled');
            }

            cellEl.addEventListener('click', e => {
                grid[cellName].enabled = !grid[cellName].enabled;  // Toggle enabled status
                printGrid();
            });

            rowDiv.appendChild(cellEl);
        }

        gridContainer.appendChild(rowDiv);
    }
}
printGrid()