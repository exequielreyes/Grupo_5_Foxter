window.addEventListener("load", () => {


    let form = document.querySelector('.formularioProducto');


    form.addEventListener('submit', (e) => {

        let errores = [];
        let msgNameBack = document.querySelector("#msg-name-back");
        let msgName = document.querySelector("#msg-name");
        let msgPrice = document.querySelector("#msg-price");
        let msgDescription = document.querySelector("#msg-description");
        let msgSize = document.querySelector("#msg-size");
        let name = document.querySelector("#nombre");
        let price = document.querySelector("#precio");
        let description = document.querySelector("#descripcion");
        let size = document.querySelectorAll(".form-check-input");

        if (name.value == '') {
            errores.push('Nombre vacio');
            name.classList.add("is-invalid");
            msgName.innerHTML = 'El Nombre del producto no debe estar vacio';
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
        /********************** */

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
        }
        /************************* */
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
            }
        }

        /************************* */

        const sizeCheked = !!document.querySelector(" input[type=checkbox]:checked");

        if (!sizeCheked) {
            errores.push('size');
            msgSize.innerHTML = 'Debe seleccionar al menos un talle';
            for (var i = 0; i < size.length; ++i) {
                size[i].classList.add('is-invalid');
            }
        }
        else {
            msgSize.innerHTML = '';
            for (var i = 0; i < size.length; ++i) {
                size[i].classList.remove('is-invalid');
            }
        }
        /************ */
        let saleCategory = document.querySelector("#saleCategory");
        let discount = document.querySelector("#descuento");
        let msgDiscount = document.querySelector("#msg-discount");
        if (saleCategory.value == 1) {
            discount.disabled = false;

            console.log(discount.value)
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
            msgDiscount.innerHTML = '';
        }

        /************** */

        if (errores.length > 0) {
            e.preventDefault();

        } else {
            console.log('Logeado bien')
        }
    })


})
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
document.getElementById('saleCategory').addEventListener('change', (e) => {
    let saleCategory = document.querySelector("#saleCategory");
    let discount = document.querySelector("#descuento");
     if (saleCategory.value == 1) {
            discount.disabled = false;
        }
        else {
            discount.value='';
            discount.classList.remove("is-invalid");
            discount.disabled = true;
            msgDiscount.innerHTML = '';
        }
});


