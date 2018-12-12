//Funciones para cambiar entre personajes.

function cambiarASamuel() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/Samuel/01.png');
	$('#pieza2').attr('src', '/img/Samuel/02.png');
	$('#pieza3').attr('src', '/img/Samuel/03.png');
	$('#pieza4').attr('src', '/img/Samuel/04.png');
	$('#pieza5').attr('src', '/img/Samuel/05.png');
	$('#pieza6').attr('src', '/img/Samuel/06.png');
	$('#pieza7').attr('src', '/img/Samuel/07.png');
	$('#pieza8').attr('src', '/img/Samuel/08.png');
	$('#pieza9').attr('src', '/img/glitch.gif');
	$('#imagen-objetivo').attr('src', '/img/samuel.png');
	$('#img-objetivo').attr('src', '/img/samuel.png');
	$('body').change(iniciar());
}


function cambiarAJohn() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/John/01.png');
	$('#pieza2').attr('src', '/img/John/02.png');
	$('#pieza3').attr('src', '/img/John/03.png');
	$('#pieza4').attr('src', '/img/John/04.png');
	$('#pieza5').attr('src', '/img/John/05.png');
	$('#pieza6').attr('src', '/img/John/06.png');
	$('#pieza7').attr('src', '/img/John/07.png');
	$('#pieza8').attr('src', '/img/John/08.png');
	$('#pieza9').attr('src', '/img/glitch.gif');
	$('#imagen-objetivo').attr('src', '/img/john.png');
	$('#img-objetivo').attr('src', '/img/john.png');
	$('body').change(iniciar());
}

function cambiarAUma() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/Uma/01.png');
	$('#pieza2').attr('src', '/img/Uma/02.png');
	$('#pieza3').attr('src', '/img/Uma/03.png');
	$('#pieza4').attr('src', '/img/Uma/04.png');
	$('#pieza5').attr('src', '/img/Uma/05.png');
	$('#pieza6').attr('src', '/img/Uma/06.png');
	$('#pieza7').attr('src', '/img/Uma/07.png');
	$('#pieza8').attr('src', '/img/Uma/08.png');
	$('#pieza9').attr('src', '/img/glitch.gif');
	$('#imagen-objetivo').attr('src', '/img/uma.png');
	$('#img-objetivo').attr('src', '/img/uma.png');
	$('body').change(iniciar());
}

function cambiarABruce() {
	instrucciones = [];
	$('#pieza1').attr('src', '/img/Bruce/01.png');
	$('#pieza2').attr('src', '/img/Bruce/02.png');
	$('#pieza3').attr('src', '/img/Bruce/03.png');
	$('#pieza4').attr('src', '/img/Bruce/04.png');
	$('#pieza5').attr('src', '/img/Bruce/05.png');
	$('#pieza6').attr('src', '/img/Bruce/06.png');
	$('#pieza7').attr('src', '/img/Bruce/07.png');
	$('#pieza8').attr('src', '/img/Bruce/08.png');
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

