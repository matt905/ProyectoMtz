/*codigo del chatbot */
let btnBolita = document.querySelector( '.chatbot ');

btnBolita.addEventListener('click',aparece);

function aparece (){
let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style','display:block;') ;
}


let btncerra = document.querySelector( '.botoncerrar');

btncerra.addEventListener('click',desaparecer);

function desaparecer(){
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style','display:none;') ;

}
//Enter para mandar imprimir 
let escrituraInput = document.querySelector('.mensajes');
escrituraInput.addEventListener('keyup',teclado);

function teclado ( event ){
    if(event.key ==="Enter")
    agregarTexto();
}

//seleccionar el boton enviar
let btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click',agregarTexto);

function agregarTexto (){
    //USUARIO
    //seleccionar la caja de texto
    let cajaMensajes = document.querySelector('.mensajes');
    //obtenemos el texto de la caja
    let textoPregunta = cajaMensajes.value;
    //borra el texto del input
    cajaMensajes.value = "";
    //seleccionamos el chat 
    let contenedorChat = document.querySelector('.contenedorchat');
    //creamos un elemento parrafo
    let parrafoNuevo = document.createElement('p');
    //Agregamos una clase a "p"
    parrafoNuevo.className = 'mensajeusuario';
    //añadimos el texto al parrafo nuevo
    parrafoNuevo.innerHTML = "Tú : "+ textoPregunta;
    //añadimos el parrafo nuevo al chat
    contenedorChat.appendChild(parrafoNuevo);

    //IA
    let parrafoIA = document.createElement('p');
    parrafoIA.innerHTML = " IA: "+ IA(textoPregunta);
    contenedorChat.appendChild(parrafoIA);
// linea de codigo para que se ponga hacia abajo 
contenedorChat.scrollTop = contenedorChat.scrollHeight;
    

}

function IA( pregunta ){
    //aqui la magia de la IA
    return"LA RESPUESTA"  ;
    
}
function IA(pregunta){
    //Pregunta 1. Cuantos años tienes?
    let edadpregunta = /(años|tienes|edad)/gi;
    if (edadpregunta.test(pregunta)){
        return "tengo 21 años";
    
    }

    //pregunta 2 
    let nombrePregunta = /tu [a-z\s]*nombre/gi;

    if(nombrePregunta.test(pregunta)){
        return"Mi nombre es Marco Antonio.";
     
     }
     //pregunta3
     let colorpregunta = /(color|favorito)/gi;
    if (colorpregunta.test(pregunta)){
        return "Azul";
    
    }
    //pregunta4
    let vivespregunta = /(conde|vives)/gi;
    if (vivespregunta.test(pregunta)){
        return "En igualapa";
    
    }
    //pregunta5
    let estudiaspregunta = /(estudias| carrera)/gi;
    if (estudiaspregunta.test(pregunta)){
        return "Ingeniería en Sistemas Computacionales";
    
    }
     
    return"no entendí tu pregunta";

    }


