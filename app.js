$(document).ready(function () {
    let turn = "X";
    let board = ["","","","","","","","",""];
    const tiles = $(".tile").toArray();

    let game_over = "";

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
            let cond = winningConditions[i];

            let a = board[cond[0]];
            let b = board[cond[1]];
            let c = board[cond[2]];

            if (a == "" && b == "" && c == "") continue;

            if  (a == b && b == c) {
                game_over = turn+" Wins!";
            }
        }
        
        let end = true;
        for (let i = 0; i < board.length;i++) {
            if (board[i] == "") end = false;
        }
        if (end == true) game_over = "Tie";

        $(".message").text(game_over);
    }
    
    $("button").click(function(){
        game_over = "";
        turn = "X";
        board = ["","","","","","","","",""];
        $(".tile").text("");
        $(".message").text("");
    })

    $(".tile").click(function(){
        if (this.innerHTML == "" && game_over == "") {
            this.innerHTML = turn;
            board[this.value] = turn;

            checkWin();

            if (game_over == "") {
                if (turn == "X") turn = "O";
                else turn = "X";
            }
        }
    })
});