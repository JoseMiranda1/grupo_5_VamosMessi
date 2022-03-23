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
fetch("https://restcountries.com/v3.1/all") 
	.then((response) => {
		if(response.status === 200){
			return response.json()
		}
		console.log("Se cayó la API");
	})
	.then((info) => {
	
		const countries = info;
		
		const countriesByName = countries.map(oneCountry => oneCountry.name.common);
		const countriesSortedByName = countriesByName.sort();
		const selectCountries = document.querySelector("#selectCountries");
		countriesSortedByName.forEach(function (countryName, i) {
			selectCountries.innerHTML += `<option value=${countryName}> ${countryName} </option>`;
		})
	})
	.catch((error) => {
		console.log(error);
	})
