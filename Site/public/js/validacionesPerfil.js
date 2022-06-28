window.addEventListener("load" , () => {

    let form = document.querySelector('.formularioPerfil');
    
    form.addEventListener('submit', (e) => {
     
        // e.preventDefault();

        let errores = [];
        let avatar = document.querySelector("#formFile");
        let name = document.querySelector("[name=name]");
        let lastName = document.querySelector("[name=lastName]");
        let extension = avatar.value.split(".").pop().toLowerCase();
        const extensionesPermitidas = ["jpg", "jpeg", "png", "gif"];
        let msgExtensiones = document.querySelector("#msgExtensiones");
        let msgName = document.querySelector("#msgName");
        let msgLastName = document.querySelector("#msgLastName");

        // if(avatar.value == ''){
        //     errores.push('No selecciono archivo');
        //     msgExtensiones.innerHTML = "Debe seleccionar un archivo"
        // }else 
        
       console.log(avatar.value);
      if (avatar.value == ''){
        msgExtensiones.innerHTML = '';

      }else {

      if (!extensionesPermitidas.includes(extension)) {
          errores.push('extensiones invalidas');
          msgExtensiones.innerHTML = `Las extensiones permitidas son: ${extensionesPermitidas.join(", ")}`;
        } else {
            msgExtensiones.innerHTML = '';
        }

      }
        
        if(name.value == ''){
            errores.push('name vacio')
           msgName.innerHTML = 'El nombre no debe estar vacio';
        }else if (name.value.length < 3){
            errores.push('name menor a 3')
            msgName.innerHTML = 'El campo nombre debe tener al menos 3 caracteres'
        }else {
           msgName.innerHTML = '';
        }


        if(lastName.value == ''){
            errores.push('lastName vacio')
           msgLastName.innerHTML = 'El apellido no debe estar vacio';
        } else if (lastName.value.length < 3){
            errores.push('LastName menor a 3')
            msgLastName.innerHTML = 'El campo apellido debe tener al menos 3 caracteres'
        } 
        else {
           msgLastName.innerHTML = '';
        }


    console.log(errores);



        if (errores.length > 0){
            e.preventDefault();
            console.log('hay errores');
        } else {
            console.log('Bien')
        }
        



    
    })
    
    })