window.addEventListener("load" , () =>{

// const formulario = document.querySelector("form");
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.form input');


const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
	lastName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{8,40}$/, 
	date: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/ 
// /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
}

const campos = {

  name: false,
  lastName:false,
  email: false,
  password: false,
  date: false
}







const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.name, e.target, 'nombre');
		break;
    case "lastName":
			validarCampo(expresiones.lastName, e.target, 'apellido');
		break;
	// case "date":
	// 		validarCampo(expresiones.date , e.target , 'date');
	// 		validarDate();
	// 	break;

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


// const validarDate = () =>{
//  const fechaNacimiento = document.getElementById('date');
//  let testDate = "03/17/21"
//  if (fechaNacimiento.value == testDate) {
	
// 	document.getElementById(`grupo__date`).classList.add('formulario__grupo-incorrecto');
// 	document.getElementById(`grupo__date`).classList.remove('formulario__grupo-correcto');
// 	document.querySelector(`#grupo__date i`).classList.add('fa-times-circle');
// 	document.querySelector(`#grupo__date i`).classList.remove('fa-check-circle');
// 	document.querySelector(`#grupo__date .formulario__input-error`).classList.add('formulario__input-error-activo');
// 	campos['date'] = false;
// } else {
// 	document.getElementById(`grupo__date`).classList.remove('formulario__grupo-incorrecto');
// 	document.getElementById(`grupo__date`).classList.add('formulario__grupo-correcto');
// 	document.querySelector(`#grupo__date i`).classList.remove('fa-times-circle');
// 	document.querySelector(`#grupo__date i`).classList.add('fa-check-circle');
// 	document.querySelector(`#grupo__date .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 	campos['date'] = true;
// }
// }


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});











formulario.addEventListener('submit' , (e) =>{


const recordame = document.getElementById("recordame");
	if(campos.nombre && campos.apellido  && campos.email && campos.password && recordame.checked ){
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	
	} else {
		e.preventDefault();

		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}


})


})