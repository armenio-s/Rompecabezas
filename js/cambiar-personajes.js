//Funciones para cambiar entre personajes.

function cambiarASamuel() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/samuel/01.png');
	$('#pieza2').attr('src', '/img/samuel/02.png');
	$('#pieza3').attr('src', '/img/samuel/03.png');
	$('#pieza4').attr('src', '/img/samuel/04.png');
	$('#pieza5').attr('src', '/img/samuel/05.png');
	$('#pieza6').attr('src', '/img/samuel/06.png');
	$('#pieza7').attr('src', '/img/samuel/07.png');
	$('#pieza8').attr('src', '/img/samuel/08.png');
	$('#pieza9').attr('src', '/img/glitch.gif');
	$('#imagen-objetivo').attr('src', '/img/samuel.png');
	$('#img-objetivo').attr('src', '/img/samuel.png');
	$('body').change(iniciar());
}


function cambiarAJohn() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/john/01.png');
	$('#pieza2').attr('src', '/img/john/02.png');
	$('#pieza3').attr('src', '/img/john/03.png');
	$('#pieza4').attr('src', '/img/john/04.png');
	$('#pieza5').attr('src', '/img/john/05.png');
	$('#pieza6').attr('src', '/img/john/06.png');
	$('#pieza7').attr('src', '/img/john/07.png');
	$('#pieza8').attr('src', '/img/john/08.png');
	$('#pieza9').attr('src', '/img/glitch.gif');
	$('#imagen-objetivo').attr('src', '/img/john.png');
	$('#img-objetivo').attr('src', '/img/john.png');
	$('body').change(iniciar());
}

function cambiarAUma() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/uma/01.png');
	$('#pieza2').attr('src', '/img/uma/02.png');
	$('#pieza3').attr('src', '/img/uma/03.png');
	$('#pieza4').attr('src', '/img/uma/04.png');
	$('#pieza5').attr('src', '/img/uma/05.png');
	$('#pieza6').attr('src', '/img/uma/06.png');
	$('#pieza7').attr('src', '/img/uma/07.png');
	$('#pieza8').attr('src', '/img/uma/08.png');
	$('#pieza9').attr('src', '/img/glitch.gif');
	$('#imagen-objetivo').attr('src', '/img/uma.png');
	$('#img-objetivo').attr('src', '/img/uma.png');
	$('body').change(iniciar());
}

function cambiarABruce() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/bruce/01.png');
	$('#pieza2').attr('src', '/img/bruce/02.png');
	$('#pieza3').attr('src', '/img/bruce/03.png');
	$('#pieza4').attr('src', '/img/bruce/04.png');
	$('#pieza5').attr('src', '/img/bruce/05.png');
	$('#pieza6').attr('src', '/img/bruce/06.png');
	$('#pieza7').attr('src', '/img/bruce/07.png');
	$('#pieza8').attr('src', '/img/bruce/08.png');
	$('#pieza9').attr('src', '/img/glitch.gif');
	$('#imagen-objetivo').attr('src', '/img/bruce.png');
	$('#img-objetivo').attr('src', '/img/bruce.png');
	$('body').change(iniciar());
}

// Funcion para dejar activo el personaje seleccionado.

$(document).on('click', '.opciones', function(){
	$(this).addClass('active').siblings('.img').removeClass('active');
	$(this).removeClass('opciones').siblings('.img').addClass('opciones');
})

