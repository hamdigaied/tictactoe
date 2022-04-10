var turn = "X";
var score = {
    "X": 0,
    "O": 0
};

// Set score
function setScore() {
    document.getElementById("score-x").innerHTML = score["X"];
    document.getElementById("score-o").innerHTML = score["O"];
}

setScore();

// Get HTML elements by class
var boxes = document.querySelectorAll(".cells");

boxes.forEach(element => {
    element.addEventListener("click", function (ev) {
        if (element.innerHTML != '') {
            return;
        }
        element.innerHTML = turn;
        checkWinner();
        turn = turn === "X" ? "O" : "X";
    })
});

function checkWinner() {
    var combinations = [
        [1, 2, 3],
        [1, 5, 9],
        [1, 4, 7],
        [9, 6, 3],
        [9, 8, 7],
        [2, 5, 8],
        [4, 5, 6],
        [7, 5, 3]
    ];

    combinations.forEach(combination => {
        let firstCell = document.getElementById(`cell${combination[0]}`).innerHTML;
        let secondCell = document.getElementById(`cell${combination[1]}`).innerHTML;
        let thirdCell = document.getElementById(`cell${combination[2]}`).innerHTML;
        let winner = false;
        if (!winner &&
            firstCell != '' &&
            secondCell != ''&&
            thirdCell != '' &&
            firstCell === secondCell &&
            firstCell === thirdCell
        ) {
            winner = true;
            score[turn]++;
            setScore();
            showWinnerLine(combination);
            setTimeout(() => {
                resetBoard();
            }, 2000);
        }
    });
}

function resetBoard() {
    boxes.forEach(element => {
        element.innerHTML = '';
    });
}

function showWinnerLine(combination) {
    console.log(combination);
}