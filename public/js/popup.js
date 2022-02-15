var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
function openRegister(){
	document.querySelector("#cont-regis").style.display='block';
	document.querySelector("#contenedor-inputs").style.display='none';
}
function closeRegister(){
	document.querySelector("#cont-regis").style.display='none';
	document.querySelector("#contenedor-inputs").style.display='block';
}