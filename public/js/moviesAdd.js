const tituloPelicula = document.querySelector("h1");
console.log(tituloPelicula);
const articulo = document.querySelector("article");
console.log(articulo);
const seccion = document.querySelector("section");
console.log(seccion);

tituloPelicula.innerText = "Agregando pelicula";
tituloPelicula.classList.add("titulo");

articulo.classList.add("fondoTransparente")
seccion.classList.add("fondoCRUD")