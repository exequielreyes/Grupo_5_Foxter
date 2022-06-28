import React from "react";
import { useState, useEffect } from "react"


function LastProductInDb({lastProduct}) {
    const [ultimoProducto, setUltimoProducto] = useState([])

    useEffect(() => {
       
        if (lastProduct.products !== undefined) { 

                let products = lastProduct.products
                let idProductos = products.map((prod) => {
                    return prod.id
                })
                let idMayor = Math.max(...idProductos)
                let ultimoproducto = products.find(elemento => elemento.id === idMayor)

                setUltimoProducto(ultimoproducto)
        }        
            
    }, [lastProduct])

    return (
        <div className="col-lg-6 mb-4 ">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo Producto Cargado a la BD</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" height="300" width="300" align="left" src={`http://localhost:3000/images/product/${ultimoProducto.image && ultimoProducto.image[0].name}`} alt="ImagenProducto" />
                    </div>
                    <p></p>
                    <p>Nombre del Producto : {ultimoProducto.name} {""}  </p>
                    <p>Descripcion: {ultimoProducto.description}</p>   
                    <p>Precio del Producto  : ${ultimoProducto.price}</p>
                </div>
            </div>
        </div>
    );
}
export default LastProductInDb;