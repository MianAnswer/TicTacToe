const symbols = ['X', 'O'];
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let index = 0;

const prepareBoard = function () {
    const board = document.getElementById('tictactoe-board');

    for (let row = 0; row < 3; ++row) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let col = 0; col < 3; ++col) {
            const cellDiv = document.createElement('div');
            cellDiv.setAttribute('row', row);
            cellDiv.setAttribute('col', col);

            initCell(board, cellDiv);

            rowDiv.appendChild(cellDiv);
        }

        board.appendChild(rowDiv);
    }
}

const initCell = function (board, cellDiv) {
    cellDiv.classList.add('cell');
    cellDiv.style.width = `${board.clientWidth / 3}px`;
    cellDiv.style.height = `${board.clientHeight / 3}px`;
    cellDiv.addEventListener('click', function (e) {
        addSymbolToCell(cellDiv);
    });
}

const addSymbolToCell = function (cellDiv) {
    const symbol = getSymbol();

    addSymbolToBoard(cellDiv, symbol);

    cellDiv.appendChild(document.createTextNode(symbol));
    cellDiv.style.pointerEvents = 'none';
}

const getCellPosition = function (cellDiv) {
    return { row: Number(cellDiv.getAttribute('row')), col: Number(cellDiv.getAttribute('col')) };
}

const addSymbolToBoard = function (cellDiv, symbol) {
    const { row, col } = getCellPosition(cellDiv);
    board[row][col] = symbol;
}

const getSymbol = function () {
    if (index >= symbols.length) {
        index = 0;
    }

    return symbols[index++];
}

const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        prepareBoard();
    }
}, 10);