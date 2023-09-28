const gridContainer = document.querySelector('#gridContainer');
const rows = 15;
const cols = 15;
let grid = {};

const updateTimer = (cell, timer, cellEl) => {
    if(cell.plantStage === 1){
        if (cell.enabled === true && cell.intervalCompleted === false) {
            if(cell.timerValue < 5){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.intervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled');
            cell.enabled = false
            clearInterval(cell.timerID)
            console.log(cell)
        }
    } else if(cell.plantStage === 2){
        if (cell.enabled === true && cell.intervalCompleted === false) {
            if(cell.timerValue < 10){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.intervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled')
            cell.enabled = false
            clearInterval(cell.timerID)
            console.log(cell)
        }
    } else if(cell.plantStage === 3){
        if (cell.enabled === true && cell.intervalCompleted === false) {
            if(cell.timerValue < 15){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.intervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled')
            cell.enabled = false
            clearInterval(cell.timerID)
            console.log(cell)
        }
    } else if(cell.plantStage === 4){
        if (cell.enabled === true && cell.intervalCompleted === false) {
            if(cell.timerValue < 20){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.intervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled')
            cell.enabled = false
            clearInterval(cell.timerID)
            console.log(cell)
            let cellContainer = cellEl.querySelector('.cellContainer')
            let timerContainer = cellEl.querySelector('.timerContainer')
            let plantContainer = cellEl.querySelector('.plantContainer')
            let seedling1or2Container = cellEl.querySelector('.seedling1or2Container')
            let seedlings = seedling1or2Container.querySelectorAll('.fa-seedling')
            seedlings.forEach(e => {
                e.style.margin = "0px"
            })

            cellContainer.removeChild(timerContainer)

            seedling1or2Container.style.margin = "0px"
            plantContainer.style.height = "100%";

        }
    }
}

const updateCellVisuals = (cellName, cellEl) => {
    if (grid[cellName].enabled) {
        if((grid[cellName].plantStage === 0 && grid[cellName].intervalCompleted === true) 
        || (grid[cellName].plantStage === 1 && grid[cellName].intervalCompleted === false)){
            if(grid[cellName].intervalCompleted === true){
        
                grid[cellName].plantStage++
                grid[cellName].intervalCompleted = false
                
                let plantContainer = document.createElement('div')
                plantContainer.setAttribute('class', 'plantContainer')
                
                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling singlePlant')
                
                let seedlingContainer = document.createElement('div')
                seedlingContainer.setAttribute('class','seedling1or2Container')
                seedlingContainer.appendChild(seedling)
                plantContainer.appendChild(seedlingContainer)
                
                let timerContainer = document.createElement('div')
                timerContainer.setAttribute('class', 'timerContainer')
                let timer = document.createElement('p')
                timer.setAttribute('class', 'timer')

                let cellContainer = document.createElement('div')
                cellContainer.setAttribute('class', 'cellContainer')
                cellContainer.appendChild(plantContainer)

                timerContainer.appendChild(timer)
                cellContainer.appendChild(timerContainer)
                
                cellEl.appendChild(cellContainer)
            }
            let timer = cellEl.querySelector('p.timer') 
            cellEl.classList.add('cellEnabled')

            grid[cellName].timerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);
        } else if((grid[cellName].plantStage === 1 && grid[cellName].intervalCompleted === true) 
        || (grid[cellName].plantStage === 2 && grid[cellName].intervalCompleted === false)) {
            if(grid[cellName].intervalCompleted === true){
                grid[cellName].plantStage++
                grid[cellName].intervalCompleted = false
                
                let seedlingContainer = cellEl.querySelector('.seedling1or2Container')

                let firstSeedling = cellEl.querySelector('.singlePlant')
                firstSeedling.classList.remove('singlePlant')

                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling')
                seedlingContainer.appendChild(seedling)
                
            }
            let timer = cellEl.querySelector('p.timer') 
            cellEl.classList.add('cellEnabled')

            grid[cellName].timerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);
            
        } else if((grid[cellName].plantStage === 2 && grid[cellName].intervalCompleted === true) 
        || (grid[cellName].plantStage === 3 && grid[cellName].intervalCompleted === false)) {
            if(grid[cellName].intervalCompleted === true){
                grid[cellName].plantStage++
                grid[cellName].intervalCompleted = false
                
                let seedlingContainer = cellEl.querySelector('.seedling1or2Container')

                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling')
                seedlingContainer.appendChild(seedling)
            }
            let timer = cellEl.querySelector('p.timer') 
            cellEl.classList.add('cellEnabled')

            grid[cellName].timerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);
            
        } else if((grid[cellName].plantStage === 3 && grid[cellName].intervalCompleted === true) 
        || (grid[cellName].plantStage === 4 && grid[cellName].intervalCompleted === false)) {
            if(grid[cellName].intervalCompleted === true){
                grid[cellName].plantStage++
                grid[cellName].intervalCompleted = false
                
                let seedlingContainer = cellEl.querySelector('.seedling1or2Container')

                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling')
                seedlingContainer.appendChild(seedling)
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
                    plantStage: 0,
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