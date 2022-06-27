import React from "react";
import { useState, useEffect } from "react"

function ProductList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "http://localhost:3000/products/detail/",
            );
            const json = await res.json();
            setData(json.products);
        };
        fetchData();
    }, [setData]);

    return (
        <div className="col-lg-6 mb-4 ">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Lista de Productos</h6>
                </div>
                <div className="card-body">
                    <ul>
                        {data.map(item => (
                            <li key={item.id}>
                                <p> Titulo: "{item.titulo}" | Precio: $ {item.precio} | Artista: {item.nombre_artista} </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default ProductList;