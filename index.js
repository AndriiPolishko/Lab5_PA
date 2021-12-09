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
    color(wolf1,wolf2,wolf3,hare,wolf4)
});

$('.inner_table').on('click','#wolf2',()=> {
    color(wolf2,wolf1,wolf3,hare,wolf4);
});

$('.inner_table').on('click','#wolf3',()=> {
    color(wolf3,wolf2,wolf1,hare,wolf4);
});

$('.inner_table').on('click','#wolf4',()=> {
    color(wolf4,wolf2,wolf3,hare,wolf1);
});

$('.inner_table').on('click','#hare',()=> {
    color(hare,wolf2,wolf3,wolf1,wolf4);
});

function color(fig1,fig2,fig3,fig4,fig5) {
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

blacks.forEach((black)=> {
    black.addEventListener('click',()=> {

            if(cur_fig !== undefined && black.innerHTML === "") {
                    if(is_move_legal(cur_parent,black)) {
                        cur_parent.innerHTML = ""
                        black.appendChild(cur_fig)
                        document.getElementById('cur').innerText = `Figure: #####`
                        cur_parent = cur_fig.parentNode
                        cur_fig = undefined
                    }
            }


    })
})

function is_move_legal(from,to) {
    let bool1 = (+to.id[0] - +from.id[0] === 1)
    let bool2 = (+to.id[2] - +from.id[2] === 1)
    let bool3 = (+to.id[2] - +from.id[2] === -1)
    return (bool1 && (bool2 ||bool3) )
}

