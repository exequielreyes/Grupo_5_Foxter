const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){
    
        //Al cargar documento se muestra lo almacenado en LS
        document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
    
        
        //Cuando se elimina productos del carrito
        carrito.addEventListener('click', (e)=>{carro.eliminarProductoArriba(e)});
        
        //Al vaciar carrito
        vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
        
        //Enviar pedido a otra pagina
        procesarPedidoBtn.addEventListener('click', (e)=>{  carro.procesarPedido(e)});
        //Se ejecuta cuando se presionar agregar carrito
        productos.addEventListener('click', (e)=>{ carro.comprarProducto(e)});
}