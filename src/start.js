export function start() {
    $(".inner_table").find("*").prop('disabled', true);

    const start_button = document.getElementById('start');
    const hard = document.getElementById('hard');
    const medium = document.getElementById('medium')
    const easy = document.getElementById('easy')

    start_button.addEventListener(('click'),()=> {
        $(".inner_table").find("*").removeProp('disabled');
        start_button.setAttribute("disabled","true");
        hard.setAttribute("disabled","true");
        medium.setAttribute("disabled","true");
        easy.setAttribute("disabled","true");

        start_button.style.backgroundColor ="dimgray";
        hard.style.backgroundColor ="dimgray";
        medium.style.backgroundColor ="dimgray";
        easy.style.backgroundColor ="dimgray";

    })
}




