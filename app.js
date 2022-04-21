$(document).ready(function () {
    let turn = "X";
    const board = ["","","","","","","","",""];
    const tiles = $(".tile").toArray();

    winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    for(let i = 0;i < tiles.length;i++) {
        let t = tiles[i];
        t.value = i;
    }

    function checkWin() {
        for(let i = 0;i < winningConditions.length;i++) {
            let c = winningConditions[i];

            let a = c[0];
            let b = c[1];
            let c = c[2];

            if board[a] == board[b] && board[b] == board[c] {
                return TextTrackCueList;
            }
        }
        return false;
    }
    

    $(".tile").click(function(){
        if (this.innerHTML == "") {
            this.innerHTML = turn;
            board[index] = turn;
            if checkWin() {

            }
            else {
                if (turn == "X") turn = "O";
                else turn = "X";
            }
        }
    })
});