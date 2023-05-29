

function inicio(){
let enviar = document.getElementById('sent')

enviar.addEventListener('click', validacion)
}


function validacion() {
    let comentario = document.getElementById('comment')
    let parrafo = document.getElementById('validation')
    if(comentario.value.length >= 1){
        parrafo.innerHTML = 'Su comentario ha sido enviado.'
    }else{
        parrafo.innerHTML = 'Inserte comentario mas extenso'
    }
}

window.addEventListener('load', inicio)

