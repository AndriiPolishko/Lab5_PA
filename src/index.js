// noinspection JSJQueryEfficiency

import {start} from "./start.js";
import{is_move_legal} from "./checkWolfMove.js";
import {checkHareMoves} from "./checkHareMove.js";
import {checkEnd} from "./checkEnd.js";
import {checkParents} from "./checkParents.js";

import {checkWolfMoves} from "./checkWolfMove.js";

start()

let depth = 1;

document.getElementById("hard").addEventListener('click',()=> {
    depth = 3;
    document.getElementById("cur_dif").innerText="Hard"
})
document.getElementById("medium").addEventListener('click',()=> {
    depth = 2;
    document.getElementById("cur_dif").innerText="Medium"
})
document.getElementById("easy").addEventListener('click',()=> {
    depth = 1;
    document.getElementById("cur_dif").innerText="Easy"
})

let wolf1 = document.getElementById('wolf1');
let wolf2 = document.getElementById('wolf2');
let wolf3 = document.getElementById('wolf3');
let wolf4 = document.getElementById('wolf4');
let hare = document.getElementById('hare')

let blacks = document.querySelectorAll('.black_block')

let cur_fig;
let cur_id;
let cur_parent;


$('.inner_table').on('click','#wolf1',()=> {
    changeCurrentFigure(wolf1)
});

$('.inner_table').on('click','#wolf2',()=> {
    changeCurrentFigure(wolf2);
});

$('.inner_table').on('click','#wolf3',()=> {
    changeCurrentFigure(wolf3);
});

$('.inner_table').on('click','#wolf4',()=> {
    changeCurrentFigure(wolf4);
});

$('.inner_table').on('click','#hare',()=> {
    changeCurrentFigure(hare);
});

function changeCurrentFigure(fig1) {

    if(document.getElementById('cur').innerText ===`Figure: #####` ) {
        copyCreation(fig1);

        document.getElementById('cur').innerText=`Figure: ${fig1.id}`

    }
    else {
        document.getElementById('cur').innerText=`Figure: #####`
        cur_fig = undefined
        cur_id = undefined

    }
}

function copyCreation(fig1) {
    cur_fig = fig1.cloneNode(true,true)
    cur_id = fig1.id
    cur_parent = document.getElementById(cur_id).parentNode
}

let wolf1_parent = wolf1.parentNode;
let wolf2_parent = wolf2.parentNode;
let wolf3_parent = wolf3.parentNode;
let wolf4_parent = wolf4.parentNode;
let hare_parent = hare.parentNode;

blacks.forEach((black)=> {

    black.addEventListener('click',()=> {

            if(cur_fig !== undefined && black.innerHTML === "") {

                    if(is_move_legal(cur_parent,black)) {

                        cur_parent.innerHTML = ""
                        black.appendChild(cur_fig)
                        document.getElementById('cur').innerText = `Figure: #####`
                        cur_parent = cur_fig.parentNode
                        checkParents(cur_parent,cur_fig,wolf1_parent,wolf2_parent,wolf3_parent,wolf4_parent,hare_parent)
                        //hareSteps(hare_parent.id)
                        checkEnd(hare_parent)

                        r_miniMax(hare_parent.id,wolf1_parent,wolf2_parent,wolf3_parent,wolf4_parent,depth,false,-Infinity,Infinity)
                        cur_fig = undefined
                    }
            }


    })
})


function hareSteps(harePosition) {

    let start = []
    start.push(harePosition);

    let queue = [];

    let moves = [];
    queue.push(start);

    while(queue.length!==0) {
        let currentSteps = queue.shift();

        if(currentSteps[currentSteps.length-1][0]==="1") {
            moves.push(currentSteps);
            continue;
        }

        let availableMoves = checkHareMoves(currentSteps[currentSteps.length-1]);
        for(let i = 0; i < availableMoves.length;i++) {
            let temp = currentSteps.concat();
            temp.push(availableMoves[i]);
            queue.push(temp);
        }
    }
    return moves
}

function getMin(moves) {
    let result;
    let shortest = Infinity;
    for(let i = 0; i < moves.length; i++) {
        if(moves[i].length<=shortest) {
            shortest=moves[i].length
            result.push(moves[i])
        }
    }
    let rand = Math.floor(Math.random() * result.length)
    return result[rand]
}

function getMax(moves) {
    let result;
    let longest = -Infinity;
    for(let i = 0; i < moves.length; i++) {
        if(moves[i].length>=longest) {
            longest=moves[i].length
            result.push(moves[i])
        }
    }
    let rand = Math.floor(Math.random() * result.length)
    return result[rand]
}

function miniMax(harePosition,currentPositionWolf1,currentPositionWolf2,currentPositionWolf3,currentPositionWolf4,depth,isMax,ALPHA,BETA) {
    if(depth==0) {
        return hareSteps(harePosition)
    }
    if(isMax) {
        let maxEval = -Infinity
        for(let i =0;i<4;i++) {
            let moves
            switch (i) {
                case 0:
                    moves = checkWolfMoves(currentPositionWolf1)
                    break;
                case 1:
                    moves = checkWolfMoves(currentPositionWolf2)
                    break;
                case 2:
                    moves = checkWolfMoves(currentPositionWolf3)
                    break;
                case 3:
                    moves = checkWolfMoves(currentPositionWolf4)
                    break;
            }

            let n = moves.length
            for(let j = 0; j < n; j++) {
                let path = miniMax(harePosition,moves[i],currentPositionWolf2,currentPositionWolf3,currentPositionWolf4,depth-1,false,ALPHA,BETA)
                if(path.length<maxEval) {
                    maxEval=path.length
                    maxEval=moves[i]

                }
                path = path.length>maxEval ? maxEval : path.length;
                ALPHA = ALPHA<maxEval ? maxEval : ALPHA;
                if(BETA<=ALPHA)
                    break;
            }
        }

        return maxEval;
    }
    else {
        let minEval = Infinity;
        let theMove;
        let moves = checkHareMoves(harePosition)
        let n = moves.length
        for(let i = 0;i < n;i++) {
            let path = miniMax(moves[i],currentPositionWolf1,currentPositionWolf2,currentPositionWolf3,currentPositionWolf4,depth-1,true)
            if(path.length<minEval) {
                minEval=path.length
                theMove=moves[i]
            }
            BETA = BETA<minEval?BETA:minEval;
            if(BETA<=ALPHA)
                break
        }
        return minEval;
    }

}

function r_miniMax(harePosition,currentPositionWolf1,currentPositionWolf2,currentPositionWolf3,currentPositionWolf4,depth,isMax,ALPHA,BETA) {
    let moves = checkHareMoves(harePosition)
    let new_parent;
    let move;
    while(true) {
        let rand = Math.floor(Math.random()* moves.length)
        move= moves[rand]
        new_parent = document.getElementById(`${move}`)
        if(new_parent==null) {
           alert("wolfs won")
            break
        }
        if(new_parent.innerHTML==="")break;
    }

    new_parent.innerHTML = hare_parent.innerHTML
    hare_parent.innerHTML= ""
    hare_parent = new_parent
    console.log(move)
}