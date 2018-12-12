// Arreglo que contiene las instrucciones del juego.
var instrucciones = ["Mové la ficha sin señal utilizando las flechas del teclado para ordenar las piezas y llegar a la imagen objetivo."];

//Arreglo que guarda los movimientos realizados durante el juego.
var movimientos = [];

//Esta función muestra un loader y habilita la página una vez que la carga esté completa, con un retardo de 2 segundos.
var loader = document.getElementById('gota');
    window.addEventListener ("load", function() {
    setTimeout(function(){loader.style.display = 'none';}, 2000);
});

// Arreglo que representa la grilla.
var grilla = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
];

// Variables que guardan la posición de la pieza vacía
var filaVacia = 2;
var columnaVacia = 2;

//Recorre el arreglo de instrucciones pasado por parámetro.
function mostrarInstrucciones(instrucciones) {
	for (i = 0; i < instrucciones.length; i++) {
		mostrarInstruccionEnLista(instrucciones[i])
	}
}

// Agrega la última dirección al arreglo de movimientos y la muestra en pantalla.
function ultimoMovimiento(direccion){
	movimientos.push(direccion);
	actualizarUltimoMovimiento(direccion);
	actualizarUltimoMovimientoMobile(direccion);
}

// Función que chequea si la grilla está en el orden ganador.
function chequearSiGano() {
  var contador = 0;
  
	var puzzleResuelto = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
  ];
  
	for(i = 0; i < grilla.length; i++){ 
	  for(j = 0; j < puzzleResuelto.length; j++){
		if (grilla[i][j] == puzzleResuelto[i][j]) {
	    contador++;
		  }
			if (contador == 9) {
			return true;
		  }
	  }
	}
}

// Notificación que avisa que ganaste el juego.
function notificarGanador() {
	swal({
		title: "¡Bien hecho!",
		text: "¡Completaste el puzzle exitosamente!\nCantidad de movimientos: " + mostrarCantidadDeMovimientos(),
		imageUrl: "img/ganaste-samuel.gif",
		imageSize: '400x225'
	});
}

// Cantidad de movimientos en la alerta final.
function mostrarCantidadDeMovimientos(){
	return movimientos.length;
}

// Función que intercambia dos posiciones en la grilla.
function intercambiarPosicionesGrilla(filaPos1, columnaPos1, filaPos2, columnaPos2) {
	var variableTemporal = grilla[filaPos1][columnaPos1];

	grilla[filaPos1][columnaPos1] = grilla[filaPos2][columnaPos2]
	grilla[filaPos2][columnaPos2] = variableTemporal;
}

// Actualiza la posición de la pieza vacía.
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
	filaVacia = nuevaFila;
	columnaVacia = nuevaColumna;
}

// Para chequear si la posicón está dentro de la grilla.
function posicionValida(fila, columna) {
	if (fila < 0 || fila >= grilla.length || columna < 0 || columna >= grilla.length) {
		return false;
	} else {
		return true;
	}
}

// Intercambio de posición con otro elemento.
function moverEnDireccion(direccion) {
	var nuevaFilaPiezaVacia;
	var nuevaColumnaPiezaVacia;

	// Mueve pieza hacia la abajo, reemplazandola con la blanca.
	if (direccion === codigosDireccion.ABAJO) {
		nuevaFilaPiezaVacia = filaVacia + 1;
		nuevaColumnaPiezaVacia = columnaVacia;
	}
		
	// Mueve pieza hacia arriba, reemplazandola con la blanca.
	else if (direccion === codigosDireccion.ARRIBA) {
		nuevaFilaPiezaVacia = filaVacia - 1;
		nuevaColumnaPiezaVacia = columnaVacia;
	}
		
	// Mueve pieza hacia la derecha, reemplazandola con la blanca.
	else if (direccion === codigosDireccion.DERECHA) {
		nuevaFilaPiezaVacia = filaVacia;
		nuevaColumnaPiezaVacia = columnaVacia + 1;
	}
		
	// Mueve pieza hacia la izquierda, reemplazandola con la blanca.
	else if (direccion === codigosDireccion.IZQUIERDA) {
		nuevaFilaPiezaVacia = filaVacia;
		nuevaColumnaPiezaVacia = columnaVacia - 1;
	}

	// Chequea si la nueva posición es válida.
	if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
		intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
		actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
		ultimoMovimiento(direccion);
	}
}

////// FUNCIONES YA IMPLEMENTADAS. //////

var codigosDireccion = {
		IZQUIERDA: 37,
		ARRIBA: 38,
		DERECHA: 39,
		ABAJO: 40
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
	var pieza1 = grilla[fila1][columna1];
	var pieza2 = grilla[fila2][columna2];

	intercambiarPosicionesGrilla(fila1, columna1, fila2, columna2);
	intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);

}

function intercambiarPosicionesDOM(idPieza1, idPieza2) {
	var elementoPieza1 = document.getElementById(idPieza1);
	var elementoPieza2 = document.getElementById(idPieza2);

	var padre = elementoPieza1.parentNode;

	var clonElemento1 = elementoPieza1.cloneNode(true);
	var clonElemento2 = elementoPieza2.cloneNode(true);

	padre.replaceChild(clonElemento1, elementoPieza2);
	padre.replaceChild(clonElemento2, elementoPieza1);
}

function actualizarUltimoMovimiento(direccion) {
	ultimoMov = document.getElementById('flecha');
	switch (direccion) {
		case codigosDireccion.ARRIBA:
			ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-up"></i>';
			break;
		case codigosDireccion.ABAJO:
		ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-down"></i>';
			break;
		case codigosDireccion.DERECHA:
		ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-right"></i>';
			break;
		case codigosDireccion.IZQUIERDA:
		ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-left"></i>';
			break;
	}
}

function actualizarUltimoMovimientoMobile(direccion) {
	ultimoMov = document.getElementById('flecha-mobile');
	switch (direccion) {
		case codigosDireccion.ARRIBA:
			ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-up"></i>';
			break;
		case codigosDireccion.ABAJO:
		ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-down"></i>';
			break;
		case codigosDireccion.DERECHA:
		ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-right"></i>';
			break;
		case codigosDireccion.IZQUIERDA:
		ultimoMov.innerHTML = '<i class="far fa-arrow-alt-circle-left"></i>';
			break;
	}
}

function mostrarInstruccionEnLista(instruccion, idLista) {
	var ul = document.getElementById('lista-instrucciones');
	var li = document.createElement("li");
	li.textContent = instruccion;
	ul.appendChild(li);
}

function mostrarInstruccionEnListaMobile(instruccion, idLista) {
	var ul = document.getElementById('lista-instrucciones-mobile');
	var li = document.createElement("li");
	li.textContent = instruccion;
	ul.appendChild(li);
}

function mezclarPiezas(veces) {
	if (veces <= 0) {
		return;
	}
	
	var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];

	var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
	moverEnDireccion(direccion);

	setTimeout(function() {
			mezclarPiezas(veces - 1);
		}, 100);

	movimientos = []; 
}

function capturarTeclas() {
	document.body.onkeydown = (function(evento) {
		if (evento.which === codigosDireccion.ABAJO ||
			evento.which === codigosDireccion.ARRIBA ||
			evento.which === codigosDireccion.DERECHA ||
			evento.which === codigosDireccion.IZQUIERDA) {

			moverEnDireccion(evento.which);

				var gano = chequearSiGano();
				if (gano) {
					setTimeout(function() {
							notificarGanador();
							}, 500);
						}
						evento.preventDefault();
				}
		})
}

function iniciar() {
		mostrarInstrucciones(instrucciones);
		mostrarInstruccionEnListaMobile(instrucciones);
		mezclarPiezas(35);
		capturarTeclas();
}

iniciar();