let tarea = document.querySelector('#tarea');
let fecha = document.querySelector('#date');
let hora = document.querySelector('#hour')
const add = document.querySelector('#add');
let prioridad = document.querySelector('#prioridad')
let listado = document.querySelector('#listado')
let ul = document.querySelector('ul');
let enviado = document.querySelector('#ok');
let cerrar = document.querySelector('.btn-close');
let list = document.querySelector('#listado')



function pintarUnEvento(pListado) {
    let ul = document.createElement('ul')


    ul.innerHTML = `<div class="row capturado">
            <ul class="lista col-11 row text-center">
                <li class="col-12 col-sm-12 col-md-8">${pListado.evento}</li>
                <li class="col-12 col-sm-12 col-md-4">${pListado.fecha} ${pListado.hora}  </li>
                
            </ul>
            <button type="button" class="btn-close col-1 cerrar eliminar" aria-label="Close" text-aling="center";></button>
        </div>`

    listado.appendChild(ul)


    switch (pListado.prioridad) {

        case "1":
            ul.classList.add('low')
            break;
        case "2":
            ul.classList.add('medium')
            break;
        case "3":
            ul.classList.add('high')
            break;
    }
  
}



function pintarTodos(pLista) {
    idActual = pLista.length;
    pLista.forEach(evento => pintarUnEvento(evento))
}
pintarTodos(eventos)

