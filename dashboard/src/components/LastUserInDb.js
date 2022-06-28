import React from "react";
import { useState, useEffect } from "react"

function LastUserInDb({lastUser}) {
    const [ultimoUsuario, setUltimoUser] = useState([])

    useEffect(() => {
        
		if (lastUser.users !== undefined) {

            
                let users = lastUser.users
                let idUsuarios = users.map((user) => {
                    return user.id
                })

                let idMayor = Math.max(...idUsuarios)
                let ultimoUsuario = users.find(elemento => elemento.id === idMayor)
                console.log(ultimoUsuario);
                setUltimoUser(ultimoUsuario)
            
}}, [lastUser])

    

    return (
        <div className="col-lg-6 mb-4 ">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo Usuario Creado en la DB</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" height="300" width="300" align="left" src={"http://localhost:3000/images/user/" + ultimoUsuario.avatar} alt="ImagenProducto" />
                    </div>
                    <p></p>
                    <p>Nombre: {ultimoUsuario.name} </p>
                    <p>Apellido: {ultimoUsuario.lastName}</p>
                    <p>Email: {ultimoUsuario.email}</p>
                </div>
            </div>
        </div>
    );
}

export default LastUserInDb;