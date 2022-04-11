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
        //Product IdBrand validation
        let productidBrand = document.getElementsByName("idBrand")[0].value; 
        if(productidBrand == ""){ 
            alert("Debe seleccionar una marca"); 
            e.preventDefault()
        } else if (productidBrand.length < 5) {
            alert("El campo de marca debe tener al menos 5 caracteres.")
            e.preventDefault()
        }

        //Product Category Validation
        let productCategory = document.getElementsByName("categories")[0].value;
        if(productCategory == ""){
            alert("Debe seleccionarse al menos 1 categoría.");
            e.preventDefault()
        }
        else if (productidBrand.length < 5) {
            alert("Debe seleccionarse al menos 1 categoría.")
            e.preventDefault()
        }

        //Product Description Validation
        let productDescription = document.getElementsByName("description")[0].value;
        if(productDescription.length < 6) {
            alert("El campo descripción debe tener al menos 15 caracteres")
            e.preventDefault()
        } else if (productDescription.length < 5) {
            alert("La descripcion del producto tiene que tener al menos 15 caracteres.")
            e.preventDefault()
        }

        //Product Image Validation
        let img = document.getElementsByName("img")[0].value;
        if(img == ""){
            alert("Debe seleccionarse una imágen para el producto.");
            e.preventDefault()
        }
        
        

        let productcolor = document.getElementsByName("color")[0].value;
        if(productcolor == ""){
            alert("El Precio debe estar completo.");
            e.preventDefault()
        }
        let productStock = document.getElementsByName("stock")[0].value;
        if(productStock == ""){
            alert("La cantidad de stock debe estar completo.");
            e.preventDefault()
        } else if (productStock.length >= 1) {
            alert("La cantidad de stock debe ser mayor o igual a 1.")
            e.preventDefault()
        }

    })
});
