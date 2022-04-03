window.addEventListener("load", function(e){
    let form = document.querySelector("#createForm");

    form.addEventListener("submit", function(e){
        //Product Name Validation
        let productName = document.getElementsByName("name")[0].value;
        if(productName == ""){
            alert("El Nombre del producto debe estar completo.");
            e.preventDefault()
        } else if (productName.length < 6) {
            alert("El campo de Nombre debe tener al menos 6 caracteres.")
            e.preventDefault()
        }

        //Product Price Validation
        let productPrice = document.getElementsByName("priceCreate")[0].value;
        if(productPrice == ""){
            alert("El Precio debe estar completo.");
            e.preventDefault()
        }

        //Product Category Validation
        let productCategory = document.getElementsByName("categories")[0].value;
        if(productCategory == ""){
            alert("Debe seleccionarse al menos 1 categoría.");
            e.preventDefault()
        }

        //Product Description Validation
        let productDescription = document.getElementsByName("productDescription")[0].value;
        if(productDescription.length < 6) {
            alert("El campo 'Descripción' debe tener al menos 15 caracteres")
            e.preventDefault()
        }

        //Product Image Validation
        let img = document.getElementsByName("img")[0].value;
        if(img == ""){
            alert("Debe seleccionarse una imágen para el producto.");
            e.preventDefault()
        }
    })
});