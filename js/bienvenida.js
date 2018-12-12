// Guarda la pista de audio en una variable y crea las funciones de play/stop.
var audio = document.getElementById("misirlou");

function reproducirAudio() {
    audio.play(); 
} 

function pausarAudio() { 
    audio.pause(); 
} 

// Función que redirige al juego.
function irAlJuego() {
    document.getElementById("comenzar").submit;
    window.location.href = 'juego.html';
}

//Esta función muestra un loader y habilita la página una vez que la carga esté completa, con un retardo de 2 segundos.
var loader = document.getElementById('gota');
    window.addEventListener ("load", function() {
    setTimeout(function(){loader.style.display = 'none';}, 2000);
    });