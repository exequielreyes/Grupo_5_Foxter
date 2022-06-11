window.addEventListener("load" , () =>{

let formulario = document.querySelector(".form");

formulario.addEventListener("submit" , (e) =>{
e.preventDefault();

let campoNombre = document.querySelector(".form #name");

if (campoNombre.value == "") {
    alert("El campo de nombre tiene que estar completo");
}else if (campoNombre.value.length < 3) {
    alert("El campo de nombre debe tener al menos 3 caracteres")
}

})


})