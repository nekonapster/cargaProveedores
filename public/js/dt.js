// tres formas de activar datatable

// 1 mediante el encapsulado de un addEventListener (no hace falta poner un defer en la llamada)
// o ponemos un addEventListener('DOMContentLoaded'... y dentro la instanciacion de la tabla 
// document.addEventListener('DOMContentLoaded', () => {
// 	let table = new DataTable('#myTable');
// });

// 2 la instanciacion directa (debemos poner un defer en el scr de la llamada)
// o lo sacamos fuera y le pasamos un defer al scr del script en la pagina .astro
// let table = new DataTable('#myTable');

// 3 mediante jquery (no hace falta poner un defern el la llamada ya que document.ready espera a que cargue completo el documento antes de llamar a la tabla)
$(document).ready(function () {
	$('#myTable').DataTable({
		paging: false,
		ordering: false,
		info: false
	});
});



