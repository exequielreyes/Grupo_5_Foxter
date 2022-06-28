window.addEventListener("load", () => {


    let form = document.querySelector('.formularioProducto');


form.addEventListener('submit', (e) => {

        let errores = [];
        let msgNameBack = document.querySelector("#msg-name-back");
        let msgName = document.querySelector("#msg-name");
        let msgPrice = document.querySelector("#msg-price");
        let msgDescription = document.querySelector("#msg-description");
        // let msgSize = document.querySelector("#msg-size");
        let name = document.querySelector("#name");
        let price = document.querySelector("#price");
        let description = document.querySelector("#description");
        // let size = document.querySelectorAll(".form-check-input");

        if (name.value == '') {
            errores.push('Nombre vacio');
            name.classList.add("is-invalid");
            msgName.innerHTML = 'El nombre del producto no debe estar vacio';
        } else {
            if (name.value.length < 6) {
                errores.push('Nombre caracteres');
                name.classList.add("is-invalid");
                msgName.innerHTML = 'El Nombre del producto debe tener al menos 5 caracteres';

            }
            else {
                name.classList.remove("is-invalid");
                name.classList.add("is-valid");
                msgName.innerHTML = '';
            }

        }

        if (price.value == '') {
            errores.push('Precio vacio');
            price.classList.add("is-invalid");
            msgPrice.innerHTML = 'El Precio del producto no debe estar vacio';
        } else {
            if (isNaN(price.value)) {
                errores.push('precio');
                msgPrice.innerHTML = '';
                price.classList.add("is-invalid");
                msgPrice.innerHTML = 'El Precio del producto debe ser un número';
            }
            else if ((parseInt(price.value)) < 0) {
                msgPrice.innerHTML = '';
                price.classList.add("is-invalid");
                errores.push('precio');
                msgPrice.innerHTML = 'El Precio debe ser mayor a 0';
            }
            else {
                price.classList.remove("is-invalid");
                price.classList.add("is-valid");
                msgPrice.innerHTML = '';

            }

        //    /--------------descripcion-------------------/
        if (description.value == '') {
            errores.push('descripcion vacio');
            description.classList.add("is-invalid");
            msgDescription.innerHTML = 'La descripción del producto no debe estar vacia';
        } else {
            if (description.value.length < 20) {
                errores.push('description caracteres');
                description.classList.add("is-invalid");
                msgDescription.innerHTML = 'La descripción del producto debe tener al menos 20 caracteres';

            }
            else {
                description.classList.remove("is-invalid");
                description.classList.add("is-valid");
                msgDescription.innerHTML = '';
            } }
        }

      

// ----------------SaleCategory-------------


        if (errores.length > 0) {
            e.preventDefault();

        } else {
            console.log('Logeado bien')
        }
    })


    let saleCategory = document.querySelector("#saleCategory");
    console.log(saleCategory)
    saleCategory.addEventListener('change' ,    (e) =>{ 
        let errores = [];
        let discount = document.querySelector("#discount");
        let msgDiscount = document.querySelector("#msg-discount");
        if (saleCategory.value == 1 ) {
            discount.disabled = false;
            
        
        

            if (discount.value == '') {
                errores.push('descuento vacio');
                discount.classList.add("is-invalid");
                msgDiscount.innerHTML = 'El descuento del producto no debe estar vacio ya que seleccionó la característica de venta <b> Oferta <b>';
            } else {
        
                if (isNaN(discount.value)) {
                    msgDiscount.innerHTML = '';
                    discount.classList.add("is-invalid");
                    msgDiscount.innerHTML = 'El descuento del producto debe ser un número';
                    errores.push('descuento');
        
                }
                else if ((parseInt(discount.value)) < 1 || (parseInt(discount.value)) > 100) {
                    msgDiscount.innerHTML = '';
                    discount.classList.add("is-invalid");
                    msgDiscount.innerHTML = 'El Descuento debe ser mayor a 0 y menor a 100';
                    errores.push('descuento');
        
                }
                else {
                    discount.classList.remove("is-invalid");
                    discount.classList.add("is-valid");
                    msgDiscount.innerHTML = '';
                }
            }
        }
        else {
            discount.classList.remove("is-invalid");
            discount.disabled = true;
            discount.value = "";
            msgDiscount.innerHTML = '';
        }
    
    
        
    } )
    

})


// addEventListener('submit', (e) => {




function fileValidation() {
    var fileInput = document.getElementById('imagen');
    let msgImage = document.querySelector("#msg-image");
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    var error = {
        state: false,
        msg: ''
    };

    for (i = 0; i < fileInput.files.length; i++) {
        if (!allowedExtensions.exec(fileInput.files[i].name)) {
            error.state = true;
            error.msg += "La imagen´" + fileInput.files[i].name + " no posee una extensión válida.<br>";

        }
    }

    if (error.state) {
        error.msg += "<b>Las extensiones válidas son .jpg|.jpeg|.png|.gif</b>";

        fileInput.classList.add("is-invalid");
        msgImage.innerHTML = error.msg;
        return;
    } else {
        fileInput.classList.remove("is-invalid");
        fileInput.classList.add("is-valid");
        msgImage.innerHTML = "";
    }

}
