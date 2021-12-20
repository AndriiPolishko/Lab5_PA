export function checkParents(cur_p,cur_f,wolf1_parent,wolf2_parent,wolf3_parent,wolf4_parent,hare_parent) {
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