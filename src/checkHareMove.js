export function checkHareMoves(id) {
    //const id = harePosition.id;
    let moves=[]

    if(id[0]==="8") {
        if(id[2]!=="1" && id[2]!=="8") {
            if(document.getElementById(`${"7/"+(+id[2]-1).toString()}`).innerHTML === "")
                moves.push(document.getElementById(`${"7/"+(+id[2]-1).toString()}`).id)
            if(document.getElementById(`${"7/"+(+id[2]+1).toString()}`).innerHTML === "")
                moves.push(document.getElementById(`${"7/"+(+id[2]+1).toString()}`).id)
        }
        else if(id[2]==="1") {
            if(document.getElementById(`${"7/"+(+id[2]+1).toString()}`).innerHTML === "")
                moves.push(document.getElementById(`${"7/"+(+id[2]+1).toString()}`).id)
        }
        else if(id[2]==="8") {
            if(document.getElementById(`${"7/"+(+id[2]-1).toString()}`).innerHTML === "")
                moves.push(document.getElementById(`${"7/"+(+id[2]-1).toString()}`).id)
        }
    }

    else if(id[2]==="8") {
        if(document.getElementById(`${(+id[0]-1).toString()+"/7"}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]-1).toString()+"/7"}`).id)
        if(document.getElementById(`${(+id[0]+1).toString()+"/7"}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/7"}`).id)
    }

    else if(id[2]==="1") {
        if(document.getElementById(`${(+id[0]-1).toString()+"/2"}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]-1).toString()+"/2"}`).id)
        if(document.getElementById(`${(+id[0]+1).toString()+"/2"}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/2"}`).id)
    }

    else {
        if(document.getElementById(`${(+id[0]-1).toString()+"/"+(+id[2]-1).toString()}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]-1).toString()+"/"+(+id[2]-1).toString()}`).id)
        if(document.getElementById(`${(+id[0]-1).toString()+"/"+(+id[2]+1).toString()}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]-1).toString()+"/"+(+id[2]+1).toString()}`).id)

        if(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]+1).toString()}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]+1).toString()}`).id)

        if(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]-1).toString()}`).innerHTML === "")
            moves.push(document.getElementById(`${(+id[0]+1).toString()+"/"+(+id[2]-1).toString()}`).id)
    }

    return moves;
}

