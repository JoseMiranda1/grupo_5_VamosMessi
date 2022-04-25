window.addEventListener("load",()=>{
const formularioRegistro = document.querySelector("#formLogin");


const usuarioPais = document.querySelector("[name=userlog]");
const claveRegistro = document.querySelector("[name=userpass]");
const clave = document.querySelector("[name=userpass]")

console.log(usuarioPais);

const validateEmptyField = (e) => {
	const field = e.target;
	console.log(e.target);
	const spanTagError = field.nextElementSibling;
	console.log(spanTagError); 
	if (field.value.trim() === "") {
		field.classList.add("inputRegisterLogin");
		spanTagError.innerText = `El campo Email y Contraseña son obligatorios`;
		
		spanTagError.classList.add("invalidfeedbackLogin");
	} else {
		field.classList.remove("inputRegisterLogin");
		field.classList.add("isvalid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalidfeedbackLogin");
	}
}


usuarioPais.addEventListener("blur", validateEmptyField);
clave.addEventListener("blur", validateEmptyField);
claveRegistro.addEventListener("input", (e) => {
	const field = e.target;
	const price = field.value;
	const spanTagError = field.nextElementSibling; // capturo al <span></span> hermano
	if (price.length < 4) {
		field.classList.add("inputRegisterLogin");
		spanTagError.innerText = `La contraseña debe tener mas de 4 digitos`;
		spanTagError.classList.add("invalidfeedbackLogin");
	} else {
		field.classList.remove("inputRegisterLogin");
		field.classList.add("isvalid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalidfeedbackLogin");
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
			oneField.classList.add("inputRegisterLogin");
			spanTagError.innerText = `El campo Email y/o Contraseña son obligatorios`;
			spanTagError.classList.add("invalidfeedbackLogin");

			thereAreErrors = true;
		} else {
			oneField.classList.remove("inputRegisterLogin");
			oneField.classList.add("isvalid");
			spanTagError.innerText = "";
			spanTagError.classList.remove("invalidfeedbackLogin");
		}
	})

	if (thereAreErrors) {
		e.preventDefault(); // Evita que se envié el formulario
	}
});
})
/*window.addEventListener("load", function(e){
    let form = document.querySelector("#formLogin");

    form.addEventListener("submit", function(e){
        //Login Email Validation
        let emailLogin = document.getElementsByName("userlog")[0].value;
        if(emailLogin == ""){
            alert("El email debe estar completo.");
            e.preventDefault()
        } else if (emailLogin.length < 6) {
            alert("El campo debe tener al menos 6 caracteres")
            e.preventDefault()
        }

        let passwordLogin = document.getElementsByName("userpass")[0].value;
        if(passwordLogin == ""){
            alert("Por favor escriba su contraseña.");
            e.preventDefault()
        }
    })
});
*/