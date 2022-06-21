window.addEventListener("load" , () =>{

// const formulario = document.querySelector("form");
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.form input');


const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
  lastName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{8,40}$/, // 4 a 12 digitos.
//   date: ^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$,

}

const campos = {

  name: false,
  lastName:false,
  email: false,
  password: false
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.name, e.target, 'nombre');
		break;
    case "lastName":
			validarCampo(expresiones.lastName, e.target, 'apellido');
		break;
    case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
    case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "repassword":
			validarPassword2();
		break;
	
	}
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('repassword');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit' , (e) =>{
e.preventDefault();


const recordame = document.getElementById("recordame");
// const datos = document.getElementById("date");
	if(campos.nombre && campos.apellido  && campos.email && campos.password && recordame.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}

// let errores = [];
// let campoNombre = document.querySelector(".form #name");
// let campoApellido = document.querySelector(".form #lastName")
// let campoFecha = document.querySelector(".form #date")
// let campoEmail = document.querySelector(".form #email")
// let msgEmail = document.querySelector("#container-email");
// let expresion;

// expresion = /\w+@\w+\.+[a-z]/;

// if (campoNombre.value == "") {
//     errores.push("Nombre Vacio");
//     // msgEmail.innerHTML = "El campo de nombre tiene que estar completo"
    
// }else if (campoNombre.value.length < 3) {
//     errores.push("El campo de nombre debe tener al menos 3 caracteres")
// }

// else if (campoApellido.value == "") {
//     errores.push("Apellido vacio");
//     // msgEmail.innerHTML = "El campo de apellido tiene que estar completo"
    
// }else if (campoApellido.value.length < 3) {
//     errores.push("El campo de apellido debe tener al menos 3 caracteres")
// }

// else if (campoFecha.value == "") {
//     errores.push("El campo de fecha tiene que estar completo");
//     return campoFecha;
// }


// if (campoEmail.value == "") {
//   // errores.push("Email vacio");
//   msgEmail.innerHTML = "El campo Email tiene que estar completo"
//   return campoEmail;
// } else if(!expresion.test(campoEmail)) {
//   msgEmail.innerHTML = "El correo no es valido";
//   return false;
// }
// else{
//    msgEmail.innerHTML = '';
// }

// if (inputs.length > 0) {
//     e.preventDefault();

//     // let ulErrores = document.querySelector("div.errores ul");
//     // for (let i = 0; i < errores.length; i++) {
        
//     //     ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
//     // }

// }

})


})