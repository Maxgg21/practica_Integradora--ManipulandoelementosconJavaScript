    const contendor = document.querySelector("main");
    const subTitulo = document.querySelector("h2");
    const enlace = document.querySelector("a")
    const parrafos = document.querySelectorAll("p")
    const cuerpo = document.querySelector("body")

    //console.log(parrafos);
    let nombreUsuario = prompt("Ingrese su nombre");
     console.log(nombreUsuario)

     if(nombreUsuario){
        subTitulo.innerText += ` ${nombreUsuario}`;
        subTitulo.style.color = "blue"
     } else {
        subTitulo.innerHTML += `<em>Invitado</em>`;
        subTitulo.style.color = "red"
     }

     subTitulo.style.textTransform =  "uppercase";
     enlace.style.color = "#E51B3E"

    let fondoPantalla = confirm("Desea colocar un fondo de pantalla?")
    
    if (fondoPantalla) {
        cuerpo.classList.add("fondo")
    }

    for (let index = 0; index < parrafos.length; index++) {
        if (i % 2 == 0) {
            parrafos[index].classList.add("destacadoInpar");
        }else{
            parrafos[index].classList.add("destacadoPar");
        }

    }

    contendor.style.display = "block";