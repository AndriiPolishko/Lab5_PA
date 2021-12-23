export function is_move_legal(from,to) {

    let bool1 = (+to.id[0] - +from.id[0] === 1)
    let bool2 = (+to.id[2] - +from.id[2] === 1)
    let bool3 = (+to.id[2] - +from.id[2] === -1)
    return (bool1 && (bool2 ||bool3) )
}

export function checkWolfMoves(id) {
    //const id = harePosition.id;
    let moves=[]


    if(id[2]==="8") {
        if(document.getElementById(`${(+id[0]+1).toString()+"/7"}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/7"}`).id)
    }

    else if(id[2]==="1") {
        if(document.getElementById(`${(+id[0]+1).toString()+"/2"}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/2"}`).id)
    }

    else {
        if(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]+1).toString()}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]+1).toString()}`).id)

        if(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]-1).toString()}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]-1).toString()}`).id)
    }

    return moves;
}

