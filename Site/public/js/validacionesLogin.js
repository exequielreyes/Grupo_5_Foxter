window.addEventListener("load" , () => {


let form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
    // e.preventDefault();

    let errores = [];
    let msgEmailBack = document.querySelector("#email-back");
    let msgEmail = document.querySelector("#container-email");
    let msgPassword = document.querySelector("#container-password");
    console.log(errores);


    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    console.log(email.value);

    if (email.value == ''){
        console.log('entre aqui');
       errores.push('email vacio');
       msgEmail.innerHTML = 'El email no debe estar vacio';
    } else {
       msgEmail.innerHTML = '';
        
    }

    if(password.value == ''){
        errores.push('password vacio')
       msgPassword.innerHTML = 'El password no debe estar vacio';
    } else {
       msgPassword.innerHTML = '';
    }

    console.log(errores);

    if (errores.length > 0){
        e.preventDefault();
       msgEmailBack.innerHTML = '';

        console.log('hay errores mann');
    } else {
        console.log('Logeado bien')
    }
})

})