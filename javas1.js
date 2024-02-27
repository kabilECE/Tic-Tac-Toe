const reset = document.getElementById("reset");
let winner = document.getElementById("winner");
let turn = 1;
let win_position = [[1,2,3],
                    [4,5,6],
                    [7,8,9],
                    [3,2,1],
                    [1,4,7],
                    [2,5,8],
                    [3,6,9],
                    [1,5,9],
                    [3,7,5]];
let choice = [1,2,3,4,5,6,7,8,9];
let pos_1 = "";
let pos_2 = "";
let pos_3 = "";
let winnerNotFind = true;
function pressed (position)
{
    
    let box = document.querySelectorAll(".boxes");
    if(turn %2 === 0 && turn<10 && winnerNotFind)
    {
        box[position-1].textContent = "O";
        choice[position-1] ="O";
    }
    if(turn %2 === 1 && turn<10 && winnerNotFind)
    {
        box[position-1].innerText = "X";
        choice[position-1] ="X";
    }
    check_winner();
    turn++;
}
function check_winner()
{
    for(box of win_position)
    {
         pos_1 = choice[box[0]-1];
         pos_2 = choice[box[1]-1];
         pos_3 = choice[box[2]-1];
        if(pos_1 === pos_2 && pos_2 === pos_3 && pos_1 === pos_3 && (pos_1 || pos_2 || pos_3) != "" && winnerNotFind)
        {
            winner.textContent=`player : ${pos_1} is the winner...!`;
            winnerNotFind = false;
        }
        
    }
}
reset.onclick= ()=>{
                    choice = [1,2,3,4,5,6,7,8,9];
                    turn = 1;     
                    box = document.querySelectorAll(".boxes");
                    box.forEach(element => {
                        element.innerText="";
                    });
                    winner.innerText="";
                    winnerNotFind = true;
}
