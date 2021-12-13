// noinspection JSJQueryEfficiency

import {start} from "./start.js";
import{is_move_legal} from "./checkWolfMove.js";
import {checkHareMoves} from "./checkHareMove.js";
import {checkEnd} from "./checkEnd.js";

start()

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
    color(wolf1)
});

$('.inner_table').on('click','#wolf2',()=> {
    color(wolf2);
});

$('.inner_table').on('click','#wolf3',()=> {
    color(wolf3);
});

$('.inner_table').on('click','#wolf4',()=> {
    color(wolf4);
});

$('.inner_table').on('click','#hare',()=> {
    color(hare);
});

function color(fig1) {
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
                        checkParents(cur_parent,cur_fig)

                        checkEnd(hare_parent)

                        cur_fig = undefined
                    }
            }


    })
})

function checkParents(cur_p,cur_f) {
    if(cur_f.id === wolf1.id) {
        wolf1_parent=cur_p;
    }
    if(cur_f.id === wolf2.id) {
        wolf2_parent=cur_p;
    }
    if(cur_f.id === wolf3.id) {
        wolf3_parent=cur_p;
    }
    if(cur_f.id === wolf4.id) {
        wolf4_parent=cur_p;
    }

    if(cur_f.id === hare.id) {
        hare_parent=cur_p;
    }
}



/*function hareMove(harePosition,wolf1Position,wolf2Position,wolf3Position,wolf4Position) {

}

function MiniMax() {

}

function evaluation(harePosition,wolf1Position,wolf2Position,wolf3Position,wolf4Position) {

}*/




