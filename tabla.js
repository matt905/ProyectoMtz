let filas = document.querySelectorAll('.fila');

filas[0].addEventListener('mouseover', function(){ cambiar('images/harry.jpg','Harry')});
filas[1].addEventListener('mouseover', function(){ cambiar('images/inter.jpg','Inter')});
filas[2].addEventListener('mouseover', function(){ cambiar('images/blade.jpg','Blade')});
filas[3].addEventListener('mouseover', function(){ cambiar('images/Matrix.jpg','Matrix')});
filas[4].addEventListener('mouseover', function(){ cambiar('images/whatch.jpg','Watchmen')});
function cambiar(ruta,titulo) {
    let contenedorImg = document.querySelector('.contenedorImagen img');
    contenedorImg.src = ruta;

    let contenedorTexto = document.querySelector('.contenedorImagen h4');
    contenedorTexto.textContent = titulo;

}
////////////////////////////////////////////////////
let btnAgregar = document.querySelector('.botonAgregar');
let btnEliminar = document.querySelector('.botonSoltar');

btnAgregar.addEventListener('click',agregar);
btnEliminar.addEventListener('click',eliminar);

function agregar (){


    //pedir los datos
    let pelicula = prompt('Cual pelicula te gusta?');
    let calificacion = prompt('Cual es tu calificacion?');
    let ruta = prompt ('URL de la imagen=');
    let top = 1;
    
    
    

    let filaNueva = document.createElement('tr'); // crear fila 
    filaNueva.innerHTML = ` <td>${top}</td><td>${pelicula}</td><td>${calificacion}</td>`;

    let tabla = document.querySelector('.tabla tbody');
    tabla.appendChild(filaNueva);

    filaNueva.addEventListener('mouseover',function(){cambiar(ruta,pelicula)});

}

function eliminar(){
    let tabla = document.querySelector('.tabla tbody');
    let ultimafila = tabla.lastChild;
    ultimafila.remove();

}