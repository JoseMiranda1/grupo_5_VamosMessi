let productCreateFrom = document.querySelector("#createForm");
const productName= document.querySelector("[name=name]");
const productStock= document.querySelector("[name=stock]");
const productBrand= document.querySelector("[name=idBrand]");
const productDescription= document.querySelector("[name=description]");
const productSizes= document.querySelector("[name=sizes]");
const productCategories= document.querySelector("[name=categories]");
const productColor= document.querySelector("[name=color]");
const productPrice= document.querySelector("[name=priceCreate]");


const validate = (e)=>{ 
    const field = e.target; 
    const Error = field.nextElementSibling; 
    if (field.value.trim()=== ""){ 
        field.classList.add("is-invalid"); 
        Error.innerText = `El campo ${field.name} es obligatorios`;
        Error.classList.add("invalid-feedback");
    } else { 
        field.classList.remove("is-invalid"); 
        field.classList.add("is-valid");
        Error.innerText = ""; 
        Error.classList.remove("invalid-feedback");
    }
}

productName.addEventListener("blur", validate);
productStock.addEventListener("blur", validate);
productBrand.addEventListener("blur", validate);
productDescription.addEventListener("blur", validate);
productSizes.addEventListener("blur", validate);
productCategories.addEventListener("blur", validate);
productColor.addEventListener("blur", validate);
productPrice.addEventListener("blur", validate);

