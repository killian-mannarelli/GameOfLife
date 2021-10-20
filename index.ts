
const GRID: boolean[][] = [];
const GRID_LENGTH = 110;

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
    console.log();
}

function newGeneration(): void {
    let gridcopy: boolean[][] = [];
    for (let i = 0; i < GRID_LENGTH; i++) {
        gridcopy[i] = []
        for (let j = 0; j < GRID_LENGTH; j++) {
            gridcopy[i][j] = GRID[i][j];
        }
    }
    gridcopy.forEach((element: boolean[], row: number) => {
        for (let col = 0; col < element.length; col++) {
            let nbNeighbours: number = getNeighboursCount(row, col)
            if (element[col]) {
                if (nbNeighbours < 2 || nbNeighbours > 3)
                    gridcopy[row][col] = false;
            } else if (nbNeighbours == 3) {
                gridcopy[row][col] = true;
            }
        }
    })
    for (let i = 0; i < GRID_LENGTH; i++) {
        for (let j = 0; j < GRID_LENGTH; j++) {
            GRID[i][j] = gridcopy[i][j];
        }
    }
}

function getNeighboursCount(row: number, col: number): number {
    let count: number = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i < 0 || i >= GRID_LENGTH || j < 0 || j >= GRID_LENGTH)
                continue;
            if (i == row && j == col)
                continue;
            if (GRID[i][j]) {
                count++;
            }
        }
    }
    return count;
}


function gen(nbgen = 1) {
    newGeneration();
    console.log(nbgen);
    showGrid();
    setTimeout(() => {
        gen(nbgen + 1);
    }, 100);
}
function main() {
    fillGrid();
    gen();
}

main();
