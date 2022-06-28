import React from "react";

function ProductList({products, users}) {

    return (
        <>
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

        <div className="col-lg-6 mb-4 ">

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Lista de Usuarios</h6>
                </div>
                <div className="card-body">
                    <ul>
                        {users.users !== undefined && users.users.map(item => (
                            
                            <li key={item.idUser}>
                                <p> Nombre: {item.name} | Apellido: {item.lastName} | Email: {item.email} </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
</>
    );
}

export default ProductList;