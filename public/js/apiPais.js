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
		const selectCountries = document.querySelector("#countries");
		countriesSortedByName.forEach(function (countryName, i) {
			selectCountries.innerHTML += `<option value=${countryName}> ${countryName} </option>`;
		})
	})
	.catch((error) => {
		console.log(error);
	})
