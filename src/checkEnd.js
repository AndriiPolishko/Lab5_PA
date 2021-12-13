export function checkEnd(hare_parent) {
    let parent_id = hare_parent.id;
    let front_left,front_right,back_left,back_right;

    let front_left_x,front_left_y;
    let front_right_x,front_right_y;
    let back_left_x,back_left_y;
    let back_right_x,back_right_y;

    front_left_x = (+parent_id[0] - 1);
    front_left_y = (+parent_id[2] - 1);

    front_right_x = (+parent_id[0] - 1);
    front_right_y = (+parent_id[2] + 1);

    back_left_x = (+parent_id[0] + 1);
    back_left_y = (+parent_id[2] - 1);

    back_right_x = (+parent_id[0] + 1);
    back_right_y = (+parent_id[2] + 1);

    if(front_left_x<=1)
        alert("hare won")

    front_left = document.getElementById(`${(front_left_x).toString() + parent_id[1] + (front_left_y).toString()}`)
    front_right = document.getElementById(`${front_right_x.toString() + parent_id[1] + front_right_y.toString()}`)
    back_left = document.getElementById(`${back_left_x.toString() + parent_id[1] + back_left_y.toString()}`);
    back_right = document.getElementById(`${back_right_x.toString() + parent_id[1] + back_right_y.toString()}`);

    if(parent_id[0]==="8")
        if(front_right.innerHTML!=="" && front_left.innerHTML!==""){
            alert("wolfs won")

        }

    if( parent_id[1]==="8")
        if(front_left.innerHTML!=="" && back_left.innerHTML!=="" ){
            alert("wolfs won")

        }

    if(parent_id[1]==="1")
        if(front_right.innerHTML!=="" && back_right.innerHTML!=="" ) {
            alert("wolfs won")

        }


    if(front_right.innerHTML!=="" && back_right.innerHTML!=="" && front_left.innerHTML!=="" && back_left.innerHTML!==""){
        alert("wolfs won")

    }



}