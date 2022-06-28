import React from "react";
import { useState, useEffect } from "react"

function ProductList({products}) {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(
    //             "http://localhost:3000/api/products",
    //         );
    //         const data = await res.json();
    //         setData(data.products);        
    //     };
    //     fetchData();
    // }, []);

    console.log(products);

    return (
        <div className="col-lg-6 mb-4 ">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Lista de Productos</h6>
                </div>
                <div className="card-body">
                    <ul>
                        { products !== undefined && products.map(item => (
                            
                            <li key={item.idProduct}>
                                <p> Titulo: "{item.name}" | Precio: $ {item.price} | Descripcion: {item.description} </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default ProductList;