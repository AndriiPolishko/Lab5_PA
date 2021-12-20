// noinspection JSJQueryEfficiency

import {start} from "./start.js";
import{is_move_legal} from "./checkWolfMove.js";
import {checkHareMoves} from "./checkHareMove.js";
import {checkEnd} from "./checkEnd.js";
import {checkParents} from "./checkParents.js";

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
                        hareSteps(hare_parent.id)
                        checkEnd(hare_parent)
                        r_miniMax(hare_parent.id)
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
    console.log(moves)
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

function miniMax(currentPositionHare,currentPositionWolf1,currentPositionWolf2,currentPositionWolf3,currentPositionWolf4,depth,isMax) {
    if(depth==0) {
        return hareSteps(currentPositionHare)
    }
    if(isMax) {
        let maxEval = -Infinity

    }

}

function r_miniMax(harePosition) {
    let moves = checkHareMoves(harePosition)
    let rand = Math.floor(Math.random()* moves.length)
    let move = moves[rand]
    let new_parent = document.getElementById(`${move}`)
    new_parent.innerHTML = hare_parent.innerHTML
    hare_parent.innerHTML= ""
    hare_parent = new_parent
    console.log(move)
}