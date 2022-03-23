const formularioRegistro = document.querySelector("#registerForm");

const nombreUsuario = document.querySelector("[name=usuario]");
const usuarioEmail = document.querySelector("[name=emailuser]");
const usuarioClave = document.querySelector("[name=clave]");
const usuarioReclave = document.querySelector("[name=reclaveuser]");
const usuarioPais = document.querySelector("[name=pais]");
const claveRegistro = document.querySelector("[name=clave]");


const validateEmptyField = (e) => {
	const field = e.target;
	console.log(e.target);
	const spanTagError = field.nextElementSibling;
	console.log(spanTagError); // capturo al <span></span> hermano
	if (field.value.trim() === "") {
		field.classList.add("inputRegister");
		spanTagError.innerText = `El campo ${field.name} es obligatorio`;
		//console.log(field.name);
		spanTagError.classList.add("invalidfeedback");
	} else {
		field.classList.remove("inputRegister");
		field.classList.add("isvalid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalidfeedback");
	}
}

usuarioReclave.addEventListener("blur", validateEmptyField);
usuarioEmail.addEventListener("blur", validateEmptyField);
nombreUsuario.addEventListener("blur", validateEmptyField);
usuarioClave.addEventListener("blur", validateEmptyField);
usuarioClave.addEventListener("input", (e) => {
	const field = e.target;
	const price = field.value;
	const spanTagError = field.nextElementSibling; // capturo al <span></span> hermano
	if (price.length < 4) {
		field.classList.add("inputRegister");
		spanTagError.innerText = `La contraseña debe tener mas de 4 digitos`;
		spanTagError.classList.add("invalidfeedback");
	} else {
		field.classList.remove("inputRegister");
		field.classList.add("isvalid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalidfeedback");
	}
});

claveRegistro.addEventListener("change", validateEmptyField);

formularioRegistro.addEventListener("submit", function (e) {
	let thereAreErrors = false;

	const formFields = [...formularioRegistro.elements];
	formFields.pop();

	formFields.forEach(oneField => {
		const spanTagError = oneField.nextElementSibling; // capturo al <span></span> hermano
		if (oneField.value.trim() === "") {
			oneField.classList.add("inputRegister");
			spanTagError.innerText = `El campo ${oneField.name} es obligatorio`;
			spanTagError.classList.add("invalid-feedback");

			thereAreErrors = true;
		} else {
			oneField.classList.remove("inputRegister");
			oneField.classList.add("isvalid");
			spanTagError.innerText = "";
			spanTagError.classList.remove("invalidfeedback");
		}
	})

	if (thereAreErrors) {
		e.preventDefault(); // Evita que se envié el formulario
	}
});