var prepareBoard = function () {
    var board = document.getElementById('tictactoe-board');

    for (let row = 0; row < 3; ++row) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let col = 0; col < 3; ++col) {
            const colDiv = document.createElement('div');

            colDiv.classList.add('col');
            colDiv.style.width = `${board.clientWidth / 3}px`;
            colDiv.style.height = `${board.clientHeight / 3}px`;
            colDiv.addEventListener('click', function (e) {
                colDiv.appendChild(document.createTextNode('X'));
                colDiv.style.pointerEvents = 'none';
            });

            rowDiv.appendChild(colDiv);
        }

        board.appendChild(rowDiv);
    }
}

var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        prepareBoard();
    }
}, 10);