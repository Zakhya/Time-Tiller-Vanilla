const gridContainer = document.querySelector('#gridContainer');
const rows = 15;
const cols = 15;
let grid = {};

const updateTimer = (cell, timer, cellEl) => {
    if (cell.enabled === true && cell.intervalCompleted === false) {
        if(cell.timerValue < 5){

            cell.timerValue++;
            timer.textContent = cell.timerValue;
        } else {
            cell.intervalCompleted = true
        }
    } else {
        timer.textContent = ''
        cellEl.classList.remove('cellEnabled');
        cell.enabled = false;
        clearInterval(cell.timerID);
        console.log(cell)
    }
}

const updateCellVisuals = (cellName, cellEl) => {
    if (grid[cellName].enabled) {
        if((grid[cellName].plant === 0 && grid[cellName].intervalCompleted === true) 
        || (grid[cellName].plant === 1 && grid[cellName].intervalCompleted === false)){

    
    
    if(grid[cellName].intervalCompleted === true){
        
                grid[cellName].plant++
                grid[cellName].intervalCompleted = false
                
                let cellContainer = document.createElement('div')
                cellContainer.setAttribute('class', 'cellContainer1Plant')
                
                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling singlePlant')
                cellContainer.appendChild(seedling)
                
                let timerContainer = document.createElement('div')
                timerContainer.setAttribute('class', 'timerContainer')
                let timer = document.createElement('p')
                timer.setAttribute('class', 'timer')
                timerContainer.appendChild(timer)
                cellContainer.appendChild(timerContainer)
                
                cellEl.appendChild(cellContainer)
            }
            let timer = cellEl.querySelector('p.timer') 
            cellEl.classList.add('cellEnabled')

            grid[cellName].timerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);
        } else {
            grid[cellName].enabled = false
        }
    } else {
        cellEl.classList.remove('cellEnabled');
        clearInterval(grid[cellName].timerID);
        grid[cellName].enabled = false
        console.log(grid[cellName])
    }
}

const printGrid = () => {
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
                    timerValue: 0,
                    timerID: null,
                    plant: 0,
                    intervalCompleted: true
                };
            }

            // Initial render
            if (grid[cellName].timerValue > 0) {
                cellEl.textContent = grid[cellName].timerValue;
            }
            if (grid[cellName].enabled) {
                cellEl.classList.add('cellEnabled');
            }

            cellEl.addEventListener('click', e => {
                const allDisabled = Object.values(grid).every(cell => !cell.enabled);
                if(allDisabled || grid[cellName].enabled == true){
                    console.log('cell event called')
                    grid[cellName].enabled = !grid[cellName].enabled;
                    updateCellVisuals(cellName, cellEl);
                }
            });

            rowDiv.appendChild(cellEl);
        }
        gridContainer.appendChild(rowDiv);
    }
}

printGrid();