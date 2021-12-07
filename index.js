let wolf1 = document.getElementById('wolf1');
let wolf2 = document.getElementById('wolf2');
let wolf3 = document.getElementById('wolf3');
let wolf4 = document.getElementById('wolf4');
let hare = document.getElementById('hare')


let cur_fig;

wolf1.addEventListener('dblclick',()=> {
    cur_fig=wolf1;
    color(wolf1,wolf2,wolf3,hare,wolf4);
})

wolf2.addEventListener('dblclick',()=> {
    cur_fig=wolf2;
    color(wolf2,wolf1,wolf3,hare,wolf4);
})

wolf3.addEventListener('dblclick',()=> {
    cur_fig=wolf3;
    color(wolf3,wolf2,wolf1,hare,wolf4);
})

wolf4.addEventListener('dblclick',()=> {
    cur_fig=wolf4;
    color(wolf4,wolf2,wolf3,hare,wolf1);
})

hare.addEventListener('dblclick',()=> {
    color(hare,wolf2,wolf3,wolf1,wolf4);
})


function color(fig1,fig2,fig3,fig4,fig5) {
    fig1.style.backgroundColor = "green";
    fig2.style.backgroundColor =
        fig3.style.backgroundColor =
            fig4.style.backgroundColor =
                fig5.style.backgroundColor = "var(--medium-gray)";
}

