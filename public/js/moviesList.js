const qs = (selector) =>{
    return document.querySelector(selector);
}

window.addEventListener("load", function (e) {

    const $body = qs("body");
    const  $h1 = qs("h1");

    let modoOscuro = prompt("¿desea modo oscuro, si o no?");

if(modoOscuro.valueOf(String) == "si" ){
    $body.style.backgroundColor = "#7f7f7f";
    $body.classList.add("fondoMoviesList");
}
    $h1.innerText = "LISTADO DE PELICULAS"; 
    $h1.style.color = "white";
    $h1.style.backgroundColor = "teal";
    $h1.style.padding = "20px";


})