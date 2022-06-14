window.addEventListener("load" , () =>{

let formulario = document.querySelector(".form");

formulario.addEventListener("submit" , (e) =>{
e.preventDefault();

let errores = [];

let campoNombre = document.querySelector(".form #name");
let campoApellido = document.querySelector(".form #lastName")

if (campoNombre.value == "") {
    errores.push("El campo de nombre tiene que estar completo");
    return campoNombre;
}else if (campoNombre.value.length < 3) {
    errores.push("El campo de nombre debe tener al menos 3 caracteres")
}


if (campoApellido.value == "") {
    errores.push("El campo de apellido tiene que estar completo");
    return campoApellido;
}else if (campoApellido.value.length < 3) {
    errores.push("El campo de apellido debe tener al menos 3 caracteres")
}




if (errores.length > 0) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++) {
        
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }

}

})


})