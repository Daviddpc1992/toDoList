let tarea = document.querySelector('#tarea');
let fecha = document.querySelector('#date');
let hora = document.querySelector('#hour')
const add = document.querySelector('#add');
let formulario = document.querySelector('input');
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

//AGREGAR
add.addEventListener('click', getDataForm);

function getDataForm(event) {
    event.preventDefault();
    idActual++;

    const nuevoEvento = {
        id: idActual,
        evento: tarea.value.trim(),
        fecha: fecha.value,
        hora: hora.value,
        prioridad: prioridad.value,

    }
    guardarEvento(nuevoEvento, eventos)
}

function guardarEvento(pNew, pList) {
    pList.push(pNew);
    pintarUnEvento(pNew);
    console.log(pNew)
}

//Alertas 


add.addEventListener('click', avisos);

function avisos(click) {

    enviado.style.display = 'block';

}



cerrar.addEventListener('click', cerrarEvento);

function cerrarEvento(click) {

    enviado.style.display = 'none';



}

//FILTRADO
function filtarEvento(pEvento) {
    list.innerHTML = "";
    let listaEventos = eventos.filter(eventos => eventos.prioridad === pEvento)
    return listaEventos;
}

let selectorPrioridad = document.getElementById('filtrado');
selectorPrioridad.addEventListener('click', prioridadEvento);

function prioridadEvento(event) {
    let evento = event.target.value;

    if (evento !== "") {
        const eventoFiltrado = filtarEvento(evento, fecha, hora, prioridad);
        pintarTodos(eventoFiltrado)
    } else {
        pintarTodos(eventos)
    }


}

//BORRAR (REVISAR SOLO ELIMINA LOS ARRAYS CITADOS)

let deleted = document.querySelector('.eliminar')
let capturado = document.querySelector('.capturado')

deleted.addEventListener('click', eliminarEvento);

function eliminarEvento(click) {

    let list = document.querySelector('#listado')

    list.removeChild(list.childNodes[0,1,2,3,4,5]);


}

