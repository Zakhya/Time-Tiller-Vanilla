let storedGrid = JSON.parse(localStorage.getItem('gridData-TimeTiller'));
const gridContainer = document.querySelector('#gridContainer');
const rows = 12;
const cols = 15;
let grid = {};

const createHeader = () => {
    const headerEl = document.querySelector('header')
}
const createSidebar = () => {
    const sidebarEl = document.querySelector('#sidebar')
}
const createFooter = () => {
    const footerEl = document.querySelector('footer')

}

const popluateCell = (type, numberOf, cellEl) =>{
    console.log(cellEl.querySelector('.seedling1or2Container') === null)
    if(numberOf === 1) {
        if(cellEl.querySelector('.seedling1or2Container') === null){

            let plantContainer = document.createElement('div')
            plantContainer.setAttribute('class', 'plantContainer')
            
            const seedling = document.createElement('i')
            seedling.setAttribute('class', `fa-solid ${type} margin-top`)
            
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
        } else {
            let seedlingContainer = cellEl.querySelector('.seedling1or2Container')
            seedlingContainer.textContent = ''

            const seedling = document.createElement('i')
            seedling.setAttribute('class', `fa-solid ${type} margin-top`)
            
            seedlingContainer.appendChild(seedling)
        } 
    } else if(numberOf === 2){

        if(cellEl.querySelector('.seedling1or2Container') === null){

            let plantContainer = document.createElement('div')
            plantContainer.setAttribute('class', 'plantContainer')
            
            const seedling1 = document.createElement('i')
            const seedling2 = document.createElement('i')
            seedling1.setAttribute('class', `fa-solid ${type} margin-top`)
            seedling2.setAttribute('class', `fa-solid ${type} margin-top`)
            
            let seedlingContainer = document.createElement('div')
            seedlingContainer.setAttribute('class','seedling1or2Container')
            seedlingContainer.appendChild(seedling1)
            seedlingContainer.appendChild(seedling2)
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
        } else {

        //////////////////////////

        const seedling = document.createElement('i')
        seedling.setAttribute('class', `fa-solid ${type} margin-top`)
        
        let seedlingContainer = cellEl.querySelector('.seedling1or2Container')
        console.log(seedlingContainer)
        seedlingContainer.textContent = ''

        let tree1 = document.createElement('i')
        let tree2 = document.createElement('i')
        tree1.setAttribute('class', `fa-solid ${type} margin-top`)
        tree2.setAttribute('class', `fa-solid ${type} margin-top`)
        
        seedlingContainer.appendChild(tree1)
        seedlingContainer.appendChild(tree2)

        localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
        }
    
    } else if(numberOf === 3){

        if(cellEl.querySelector('.seedling1or2Container') === null){

            let plantContainer = document.createElement('div')
            plantContainer.setAttribute('class', 'plantContainer')
            
            const seedling1 = document.createElement('i')
            const seedling2 = document.createElement('i')
            const seedling3 = document.createElement('i')
            seedling1.setAttribute('class', `fa-solid ${type} margin-top`)
            seedling2.setAttribute('class', `fa-solid ${type} margin-top`)
            seedling3.setAttribute('class', `fa-solid ${type}`)
            
            let seedlingContainer = document.createElement('div')
            seedlingContainer.setAttribute('class','seedling1or2Container')
            seedlingContainer.appendChild(seedling1)
            seedlingContainer.appendChild(seedling2)
            seedlingContainer.appendChild(seedling3)
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
        } else {

        //////////////////////////

        const seedling = document.createElement('i')
        seedling.setAttribute('class', `fa-solid ${type} margin-top`)
        
        let seedlingContainer = cellEl.querySelector('.seedling1or2Container')
        console.log(seedlingContainer)
        seedlingContainer.textContent = ''

        let tree1 = document.createElement('i')
        let tree2 = document.createElement('i')
        let tree3 = document.createElement('i')
        tree1.setAttribute('class', `fa-solid ${type} margin-top`)
        tree2.setAttribute('class', `fa-solid ${type} margin-top`)
        tree3.setAttribute('class', `fa-solid ${type}`)
        
        seedlingContainer.appendChild(tree1)
        seedlingContainer.appendChild(tree2)
        seedlingContainer.appendChild(tree3)

        localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
        }
    
    } else if(numberOf === 4){

        if(cellEl.querySelector('.seedling1or2Container') === null){

            let plantContainer = document.createElement('div')
            plantContainer.setAttribute('class', 'plantContainer')
            
            const seedling1 = document.createElement('i')
            const seedling2 = document.createElement('i')
            const seedling3 = document.createElement('i')
            const seedling4 = document.createElement('i')
            seedling1.setAttribute('class', `fa-solid ${type} margin-top`)
            seedling2.setAttribute('class', `fa-solid ${type} margin-top`)
            seedling3.setAttribute('class', `fa-solid ${type}`)
            seedling4.setAttribute('class', `fa-solid ${type}`)
            
            let seedlingContainer = document.createElement('div')
            seedlingContainer.setAttribute('class','seedling1or2Container')
            seedlingContainer.appendChild(seedling1)
            seedlingContainer.appendChild(seedling2)
            seedlingContainer.appendChild(seedling3)
            seedlingContainer.appendChild(seedling4)
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
        } else {

        //////////////////////////

        const seedling = document.createElement('i')
        seedling.setAttribute('class', `fa-solid ${type} margin-top`)
        
        let seedlingContainer = cellEl.querySelector('.seedling1or2Container')
        console.log(seedlingContainer)
        seedlingContainer.textContent = ''

        let tree1 = document.createElement('i')
        let tree2 = document.createElement('i')
        let tree3 = document.createElement('i')
        let tree4 = document.createElement('i')
        tree1.setAttribute('class', `fa-solid ${type} margin-top`)
        tree2.setAttribute('class', `fa-solid ${type} margin-top`)
        tree3.setAttribute('class', `fa-solid ${type} margin-top`)
        tree4.setAttribute('class', `fa-solid ${type} margin-top`)
        
        seedlingContainer.appendChild(tree1)
        seedlingContainer.appendChild(tree2)
        seedlingContainer.appendChild(tree3)
        seedlingContainer.appendChild(tree4)

        localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
        }
    
    }
}


const updateLongTimerID = (cell, timer, cellEl) => {
    console.log(cell.plantStage)
    if(cell.plantStage === '1seedling' && cell.longIntervalCompleted === false){
        if(cell.timerValue < 10){
            cell.timerValue++
            timer.textContent = cell.timerValue
        } else {
            cell.longIntervalCompleted = true
            cell.timerValue = 0
        }
    } else if(cell.plantStage === '2seedling' && cell.longIntervalCompleted === false){
        if(cell.timerValue < 10){
            cell.timerValue++
            timer.textContent = cell.timerValue
        } else {
            cell.longIntervalCompleted = true
        }
    }else if(cell.plantStage === '3seedling' && cell.longIntervalCompleted === false){
        if(cell.timerValue < 15){
            cell.timerValue++
            timer.textContent = cell.timerValue
        } else {
            cell.longIntervalCompleted = true
        }
    }else if(cell.plantStage === '4seedling' && cell.longIntervalCompleted === false){
        if(cell.timerValue < 20){
            cell.timerValue++
            timer.textContent = cell.timerValue
        } else {
            cell.longIntervalCompleted = true
        }
    }else {
        clearInterval(cell.longTimerID)
        cell.timerValue = 0
        if(cell.plantStage === '1seedling'){
            cell.plantStage = '1tree'
            popluateCell('fa-tree', 1, cellEl)
        } else if(cell.plantStage === '2seedling'){
            cell.plantStage = '2tree'
            popluateCell('fa-tree', 2, cellEl)
        } else if(cell.plantStage === '3seedling'){
            cell.plantStage = '3tree'
            popluateCell('fa-tree', 3, cellEl)
        }  else if(cell.plantStage === '4seedling'){
            cell.plantStage = '4tree'
            popluateCell('fa-tree', 4, cellEl)
        }
        timer.textContent = ''

        localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
    }
}

const updateTimer = (cell, timer, cellEl) => {
    if(cell.plantStage === '1seedling'){
        if (cell.enabled === true && cell.shortIntervalCompleted === false) {
            if(cell.timerValue < 5){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.shortIntervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled');
            cell.enabled = false
            clearInterval(cell.shortTimerID)
            cell.longIntervalCompleted === false
            cell.timerValue = 0
            cell.longIntervalStart = new Date()
            cell.longTimerID = setInterval(() => updateLongTimerID(cell, timer, cellEl), 1000);
            localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
        }
    } else if(cell.plantStage === '2seedling'){
        console.log(cell)
        if (cell.enabled === true && cell.shortIntervalCompleted === false) {
            if(cell.timerValue < 10){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.shortIntervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled')
            cell.enabled = false
            clearInterval(cell.shortTimerID)
            console.log(cell)
            cell.timerValue = 0
            cell.longIntervalStart = new Date()
            cell.longTimerID = setInterval(() => updateLongTimerID(cell, timer, cellEl), 1000);
            localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));

        }
    } else if(cell.plantStage === '3seedling'){
        if (cell.enabled === true && cell.shortIntervalCompleted === false) {
            if(cell.timerValue < 15){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.shortIntervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled')
            cell.enabled = false
            clearInterval(cell.shortTimerID)
            console.log(cell)
            localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
            cell.timerValue = 0
            cell.longIntervalStart = new Date()
            cell.longTimerID = setInterval(() => updateLongTimerID(cell, timer, cellEl), 1000);
            localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));

        }
    } else if(cell.plantStage === '4seedling'){
        if (cell.enabled === true && cell.shortIntervalCompleted === false) {
            if(cell.timerValue < 20){
                cell.timerValue++
                timer.textContent = cell.timerValue
            } else {
                cell.shortIntervalCompleted = true
            }
        } else {
            timer.textContent = ''
            cellEl.classList.remove('cellEnabled')
            cell.enabled = false
            clearInterval(cell.shortTimerID)
            console.log(cell)
            localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
            cell.timerValue = 0
            cell.longIntervalStart = new Date()
            cell.longTimerID = setInterval(() => updateLongTimerID(cell, timer, cellEl), 1000);
            localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
            let plantContainer = cellEl.querySelector('.plantContainer')
            let seedling1or2Container = cellEl.querySelector('.seedling1or2Container')
            let seedlings = seedling1or2Container.querySelectorAll('.fa-seedling')
            seedlings.forEach(e => {
                e.style.margin = "0px"
            })

            // cellContainer.removeChild(timerContainer)

            seedling1or2Container.style.margin = "0px"
            plantContainer.style.height = "100%"
            cell.timerValue = 0
        }
    }
}

const updateCellVisuals = (cellName, cellEl) => {
    if (grid[cellName].enabled) {
        if((grid[cellName].plantStage === 'none' && grid[cellName].shortIntervalCompleted === true) 
        || (grid[cellName].plantStage === '1seedling' && grid[cellName].shortIntervalCompleted === false)){
            if(grid[cellName].shortIntervalCompleted === true){
                
                grid[cellName].plantStage = '1seedling'
                grid[cellName].shortIntervalCompleted = false
                grid[cellName].longIntervalCompleted = false
                
                
                let plantContainer = document.createElement('div')
                plantContainer.setAttribute('class', 'plantContainer')
                
                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling margin-top')
                
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

            grid[cellName].shortTimerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);

        } else if((grid[cellName].plantStage === '1seedling' && grid[cellName].shortIntervalCompleted === true) 
        || (grid[cellName].plantStage === '2seedling' && grid[cellName].shortIntervalCompleted === false)) {
            if(grid[cellName].longIntervalCompleted === false){
                clearInterval(grid[cellName].longTimerID)
            }
            if(grid[cellName].shortIntervalCompleted === true){
                grid[cellName].plantStage = '2seedling'
                grid[cellName].shortIntervalCompleted = false
                grid[cellName].longIntervalCompleted = false
                
                // let seedlingContainer = cellEl.querySelector('.seedling1or2Container')

                // let firstSeedling = cellEl.querySelector('.margin-top')
                // firstSeedling.classList.remove('margin-top')

                // const seedling = document.createElement('i')
                // seedling.setAttribute('class', 'fa-solid fa-seedling')
                // seedlingContainer.appendChild(seedling)

                popluateCell('fa-seedling', 2, cellEl)
                
            }
            let timer = cellEl.querySelector('p.timer') 
            cellEl.classList.add('cellEnabled')

            grid[cellName].shortTimerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);
            
        } else if((grid[cellName].plantStage === '2seedling' && grid[cellName].shortIntervalCompleted === true) 
        || (grid[cellName].plantStage === '3seedling' && grid[cellName].shortIntervalCompleted === false)) {
            if(grid[cellName].longIntervalCompleted === false){
                clearInterval(grid[cellName].longTimerID)
            }
            if(grid[cellName].shortIntervalCompleted === true){
                grid[cellName].plantStage = '3seedling'
                grid[cellName].shortIntervalCompleted = false
                grid[cellName].longIntervalCompleted = false
                
                let seedlingContainer = cellEl.querySelector('.seedling1or2Container')

                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling')
                seedlingContainer.appendChild(seedling)
            }
            let timer = cellEl.querySelector('p.timer') 
            cellEl.classList.add('cellEnabled')

            grid[cellName].shortTimerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);
            
        } else if((grid[cellName].plantStage === '3seedling' && grid[cellName].shortIntervalCompleted === true) 
        || (grid[cellName].plantStage === '4seedling' && grid[cellName].shortIntervalCompleted === false)) {
            if(grid[cellName].longIntervalCompleted === false){
                clearInterval(grid[cellName].longTimerID)
            }
            if(grid[cellName].shortIntervalCompleted === true){
                grid[cellName].plantStage = '4seedling'
                grid[cellName].shortIntervalCompleted = false
                grid[cellName].longIntervalCompleted = false
                
                let seedlingContainer = cellEl.querySelector('.seedling1or2Container')

                const seedling = document.createElement('i')
                seedling.setAttribute('class', 'fa-solid fa-seedling')
                seedlingContainer.appendChild(seedling)
            }
            let timer = cellEl.querySelector('p.timer') 
            cellEl.classList.add('cellEnabled')

            grid[cellName].shortTimerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);
            
        } else if((grid[cellName].plantStage === '4seedling' && grid[cellName].shortIntervalCompleted === true)){

            grid[cellName].shortTimerID = setInterval(() => updateTimer(grid[cellName], timer, cellEl), 1000);

        }else {
            grid[cellName].enabled = false
        }
    } else {
        cellEl.classList.remove('cellEnabled');
        clearInterval(grid[cellName].shortTimerID);
        grid[cellName].enabled = false
        console.log(grid[cellName])
        if(grid[cellName].longIntervalCompleted === false){
            clearInterval(grid[cellName].longTimerID)
        }
    }
}

const createGrid = () => {
    if(!storedGrid){
        for (let i = 0; i < rows; i++) {
            let rowDiv = document.createElement('div')
            rowDiv.classList.add('rowDiv')

            for (let j = 0; j < cols; j++) {
                let cellEl = document.createElement('p')
                cellEl.classList.add('gridCell')
                let cellName = 'cell' + i + '-' + j
                console.log(cellName)

                
                grid[cellName] = {
                    enabled: false,
                    timerValue: 0,
                    shortTimerID: null,
                    longTimerID: null,
                    plantStage: 'none',
                    shortIntervalCompleted: true,
                    longIntervalStart: 0,
                    longIntervalLength: 0,
                    longIntervalCompleted: true
                };


                cellEl.addEventListener('click', e => {
                    const allDisabled = Object.values(grid).every(cell => !cell.enabled)
                    if(allDisabled || grid[cellName].enabled == true){
                        console.log('cell event called')
                        grid[cellName].enabled = !grid[cellName].enabled
                        updateCellVisuals(cellName, cellEl);
                    }
                });

                rowDiv.appendChild(cellEl);
            }
            gridContainer.appendChild(rowDiv);
        }
        localStorage.setItem('gridData-TimeTiller', JSON.stringify(grid));
    } else {
        //create Grid from storage
        for (let i = 0; i < rows; i++) {
            let rowDiv = document.createElement('div')
            rowDiv.classList.add('rowDiv')

            for (let j = 0; j < cols; j++) {
                let cellEl = document.createElement('p')
                cellEl.classList.add('gridCell')
                let cellName = 'cell' + i + '-' + j

                if (storedGrid[cellName]) {
                    grid[cellName] = storedGrid[cellName];
                } else {
                    grid[cellName] = {
                        enabled: false,
                        timerValue: 0,
                        shortTimerID: null,
                        longTimerID: null,
                        plantStage: 'none',
                        shortIntervalCompleted: true,
                        longIntervalStart: 0,
                        longIntervalLength: 0,
                        longIntervalCompleted: true
                    };
                }

                //initial render
                
                if (storedGrid[cellName].plantStage === '1seedling' && storedGrid[cellName].longIntervalCompleted === false) {
                    popluateCell('fa-seedling', 1, cellEl)
                } else if(storedGrid[cellName].plantStage === '1tree' && storedGrid[cellName].longIntervalCompleted === true){
                    popluateCell('fa-tree', 1, cellEl)
                } else if(storedGrid[cellName].plantStage === '2seedling' && storedGrid[cellName].longIntervalCompleted === false){
                    popluateCell('fa-seedling', 2, cellEl)
                } else if(storedGrid[cellName].plantStage === '2tree' && storedGrid[cellName].longIntervalCompleted === true){
                    popluateCell('fa-tree', 2, cellEl)
                } else if(storedGrid[cellName].plantStage === '3seedling' && storedGrid[cellName].longIntervalCompleted === false){
                    popluateCell('fa-seedling', 3, cellEl)
                } else if(storedGrid[cellName].plantStage === '3tree' && storedGrid[cellName].longIntervalCompleted === true){
                    popluateCell('fa-tree', 3, cellEl)
                }  else if(storedGrid[cellName].plantStage === '4seedling' && storedGrid[cellName].longIntervalCompleted === false){
                    popluateCell('fa-seedling', 4, cellEl)
                } else if(storedGrid[cellName].plantStage === '4tree' && storedGrid[cellName].longIntervalCompleted === true){
                    popluateCell('fa-tree', 4, cellEl)
                }
                if (grid[cellName].enabled) {
                    cellEl.classList.add('cellEnabled')
                }

                cellEl.addEventListener('click', e => {
                    const allDisabled = Object.values(grid).every(cell => !cell.enabled)
                    if(allDisabled || grid[cellName].enabled == true){
                        console.log('cell event called')
                        grid[cellName].enabled = !grid[cellName].enabled
                        updateCellVisuals(cellName, cellEl);
                    }
                });

                rowDiv.appendChild(cellEl);
            }
            gridContainer.appendChild(rowDiv);
        }
    }
}
const createUI = () => {
    createHeader()
    createSidebar()
    createGrid()
    createFooter()
}
createUI()
console.log(grid)


