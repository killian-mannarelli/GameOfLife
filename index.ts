
const GRID: boolean[][] = [];
const GRID_LENGTH = 10;

function fillGrid() {
    for (let i = 0; i < GRID_LENGTH; i++) {
        GRID[i] = [];
        for (let j = 0; j < GRID_LENGTH; j++) {
            GRID[i][j] = Math.random() > 0.5;
        }
    }
}


function showGrid(): void {
    GRID.forEach((element: boolean[]) => {
        let s: string = "";
        element.forEach((elt: boolean) => {
            s += "|" + (elt ? "+" : " ");
        })
        s += "|";
        console.log(s);
    })
}

function newGeneration(): void {
    let gridcopy: boolean[][] = [...GRID];
    gridcopy.forEach((element: boolean[], row: number) => {
        gridcopy[row] = [...element];
        for (let col = 0; col < element.length; col++) {
            if(getNeighboursCount(row,col) == 3){
                
            }
        }
    })
}

function getNeighboursCount(row: number, col: number): number {
    let count: number;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if ((GRID[i][j] ?? false) && i != row && j != col) {
                count++;
            }
        }
    }
    return count;
}

function main() {
    fillGrid();
    showGrid();


    while (true) {

    }
}

main();
