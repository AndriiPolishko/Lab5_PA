export function is_move_legal(from,to) {
    let bool1 = (+to.id[0] - +from.id[0] === 1)
    let bool2 = (+to.id[2] - +from.id[2] === 1)
    let bool3 = (+to.id[2] - +from.id[2] === -1)
    return (bool1 && (bool2 ||bool3) )
}