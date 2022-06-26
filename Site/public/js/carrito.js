class Carrito {

    //Añadir producto al carrito
    comprarProducto(e) {
        e.preventDefault();
        //Delegado para agregar al carrito
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos

            this.leerDatosProducto(producto);
        }
    }

    //Leer datos del producto
    leerDatosProducto(producto) {

        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('.title').textContent,
            precio: producto.querySelector('.price span').textContent,
            id: producto.querySelector('.agregar-carrito').getAttribute('data-id'),
            talle: producto.querySelector('#talle').value,
            cantidad: 1
        }

        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id === infoProducto.id) {
                productosLS = productoLS.id;
            }
        });

        if (productosLS === infoProducto.id) {
            Swal.fire({
                type: 'info',
                title: 'Oops...',
                text: 'El producto ya está agregado',
                showConfirmButton: false,
                timer: 1000
            })
        }
        else {
            this.insertarCarrito(infoProducto);
        }

    }

    //muestra producto seleccionado en carrito
<<<<<<< HEAD
    insertarCarrito(producto){
        // const tomando = document.querySelector("h6").innerHTML = `${producto.titulo}`
=======
    insertarCarrito(producto) {
>>>>>>> bda92f3f8a6db67f965a4d94f1e14874137dc7b4
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.talle}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);

        Swal.fire({
            type: 'info',
            title: 'Éxito!',
            text: 'El producto se agregó al carrito',
        })
    }

    //Eliminar el producto del carrito en el DOM
    eliminarProducto(e) {
        e.preventDefault();
   
        let producto, productoID;
        if (e.target.parentElement.classList.contains('borrar-producto')) {
             e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
         
            productoID = producto.querySelector('a').getAttribute('data-id');
       

            this.eliminarProductoLocalStorage(productoID);
        }
        this.calcularTotal();

    }
    //Eliminar el producto del carrito en el DOM
    eliminarProductoArriba(e) {
        e.preventDefault();
   
        let producto, productoID;
        if (e.target.classList.contains('borrar-producto')) {
             e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
         
            productoID = producto.querySelector('a').getAttribute('data-id');
       

            this.eliminarProductoLocalStorage(productoID);
        }
        //this.calcularTotal();

    }

    //Elimina todos los productos
    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();

        return false;
    }

    //Almacenar en el LS
    guardarProductosLocalStorage(producto) {
        let productos;
        //Toma valor de un arreglo con datos del LS
        productos = this.obtenerProductosLocalStorage();
        //Agregar el producto al carrito
        productos.push(producto);
        //Agregamos al LS
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    //Comprobar que hay elementos en el LS
    obtenerProductosLocalStorage() {
        let productoLS;

        //Comprobar si hay algo en LS
        if (localStorage.getItem('productos') === null) {
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    //Mostrar los productos guardados en el LS
    leerLocalStorage() {

        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        if (productosLS.length == 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<p class='text-center'>No hay producto</p>`;
            listaProductos.appendChild(row);

        }
        else {
            listaProductos.innerHTML="";

            productosLS.forEach(function (producto) {
                //Construir plantilla
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                </td>
            `;
                listaProductos.appendChild(row);
            });
        }
    }

    //Mostrar los productos guardados en el LS en compra.html
    leerLocalStorageCompra() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
     
        productosLS.forEach(function (producto) {
            const row = document.createElement('article');
            row.innerHTML = `
            <div class="card mb-3" id="product">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${producto.imagen}"  class="img-fluid rounded-start"
                    alt="${producto.titulo}" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="titulo-producto">
                      <h5 class="card-title"> ${producto.titulo} </h5>
                     
                        <i class="fas fa-edit"></i>
                        <a href="#" class="borrar-producto"  data-id="${producto.id}"><i class="fas fa-trash-alt"></i></a>                        
                     
                    </div>
                    <p class="card-text">
                    <p>Talle: ${producto.talle}</p>

                    </p>

                    <div class="container-cantidad-precio">
                      <div class="container-cantidad-productos">
                        <label class="cantidad-productos">Cantidad</label>
                        <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                      </div>
                      <div class="container-precio">
                        <label class="precio-total">Total</label>
                        <p class="precio-product">${producto.precio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

               
            `;
         
           

            listaCompra.appendChild(row);
        });
      
       
        this.calcularTotal();


    }

    //Eliminar producto por ID del LS
    eliminarProductoLocalStorage(productoID) {
       
        let productosLS;
        //Obtenemos el arreglo de productos
        productosLS = this.obtenerProductosLocalStorage();
        //Comparar el id del producto borrado con LS
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index, 1);
            }
        });

        //Añadimos el arreglo actual al LS
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    //Eliminar todos los datos del LS
    vaciarLocalStorage() {

        localStorage.clear();
        const row = document.createElement('tr');
        row.innerHTML = `<p class='text-center'>No hay producto</p>`;
        listaProductos.appendChild(row);

    }

    //Procesar pedido
    procesarPedido(e) {
        e.preventDefault();



        if (this.obtenerProductosLocalStorage().length === 0) {
            Swal.fire({
                imageUrl: 'https://letrasrecortadas.com/carritoVacio.png',
                imageHeight: 200,
                type: 'error',
                title: 'Oops...',
                text: 'El carrito está vacío, agrega algún producto',
                showConfirmButton: false,
                timer: 2000
            })
        }
        else {
            location.href = "/products/cart";
        }
    }

    //Calcular montos
    calcularTotal(){
        let productosLS;
        let total = 0, totals = 0, subtotal = 0;
        productosLS = this.obtenerProductosLocalStorage();
        for(let i = 0; i < productosLS.length; i++){
            let element = Number(productosLS[i].precio * productosLS[i].cantidad);
            total = total + element;
            
        }
        
        subtotal = parseFloat(total).toFixed(2);
         totals=parseFloat(total+200).toFixed(2);

        document.getElementById('subtotal').innerHTML = subtotal;
        document.getElementById('total').innerHTML = totals;
    }

   
    obtenerEvento(e) {
       
        e.preventDefault();
        let id, cantidad, producto, productosLS;
        if (e.target.classList.contains('cantidad')) {

            producto = e.target.parentElement.parentElement.parentElement;
            
            id = producto.querySelector('a').getAttribute('data-id');
            cantidad = producto.querySelector('input').value;
           let actualizarMontos = document.querySelectorAll('.precio-product');
            productosLS = this.obtenerProductosLocalStorage();
            productosLS.forEach(function (productoLS, index) {
                if (productoLS.id === id) {
                    productoLS.cantidad = Number(cantidad);
                    actualizarMontos[index].innerHTML = cantidad * productosLS[index].precio;
                }
            

            });
            localStorage.setItem('productos', JSON.stringify(productosLS));
            this.calcularTotal();
        }
        else {
            console.log("click afuera");
        }
    }
}