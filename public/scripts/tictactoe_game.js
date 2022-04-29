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

const horizontalVerification = function () {
    for (let row = 0; row < board.length; ++row) {
        var symbol = board[row][0];
        var isMatch = true;

        for (let col = 1; col < board[row].length; ++col) {
            if (board[row][col] != symbol || board[row][col] == '') {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return true;
        }
    }

    return false;
}

const verticalVerification = function () {
    for (let col = 0; col < board[0].length; ++col) {
        var symbol = board[0][col];
        var isMatch = true;

        for (let row = 1; row < board.length; ++row) {
            if (board[row][col] != symbol || board[row][col] == '') {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return true;
        }
    }

    return false;
}

const leftDiagonalVerification = function () {
    var symbol = board[0][0];
    var isMatch = true;

    for (let row = 1; row < board.length; ++row) {
        if (board[row][row] != symbol || board[row][row] == '') {
            isMatch = false;
            break;
        }
    }

    if (isMatch) {
        return true;
    }

    return false;
}

const rightDiagonalVerification = function () {
    var colLength = board[0].length;
    var symbol = board[0][colLength - 1];
    var isMatch = true;

    for (let row = 1; row < board.length; ++row) {
        for (let col = board.length - 1 - row; col >= 0; --col) {
            if (board[row][col] != symbol || board[row][col] == '') {
                isMatch = false;
                break;
            }
        }
    }

    if (isMatch) {
        return true;
    }

    return false;
}

const verifyWinner = function () {
    return horizontalVerification() || verticalVerification() || leftDiagonalVerification() || rightDiagonalVerification();
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