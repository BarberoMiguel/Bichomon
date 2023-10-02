console.log(document.title);
const titulo = document.getElementById("gen-1");
titulo.innerHTML = "Generasión 1 Pokimon";
const fondo = document.getElementById("gen1");
fondo.style.backgroundColor = "lightgrey";
var URLactual = window.location;
console.log(URLactual.href);
console.log(URLactual.host);
const imagenes = document.querySelectorAll("img");
console.log(imagenes);
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}
const voladores = document.querySelectorAll(".flying");
for (let i = 0; i < voladores.length; i++) {
    voladores[i].parentNode.parentNode.style.backgroundColor = "lightblue";
}
