//seleccionamos el audio
const musicaFondo = document.getElementById("musicaFondo");
const sonidoPapel = document.getElementById("sonidoPapel");
const sonidoPapelCerrar = document.getElementById("sonidoPapelCerrar");
const botonSonido = document.getElementById("botonSonido");
const sonidoTransicion = document.getElementById("transicion");
const botonCerrarCarta = document.getElementById("cerrarCarta");
const botonCarta = document.getElementById("botonCarta");
const modalCarta = document.getElementById("modalCarta");
const overlay = document.getElementById("overlay");
const carta = document.getElementById("carta");
let sonidoActivo = true;
    botonSonido.className = "botonSonidoActivado"

modalCarta.style.display = "none";
// Intentamos reproducir automaticamente al cargar
botonSonido.addEventListener("click", () =>{
    if(sonidoActivo === true){
        sonidoActivo = false;
        botonSonido.className = "botonSonido"
        musicaFondo.pause().then(()=>{
        console.log("Musica de fondo pausada ")
        }).catch(() =>{
        console.log("Error al pausar el audio")
        });
    } else {
    sonidoActivo = true;
    botonSonido.className = "botonSonidoActivado"
    musicaFondo.volume = 0.5
    musicaFondo.play()
    .then(()=>{
        console.log("Reproduciendo musica de fondo")
    })
    .catch(() =>{
        console.log("Error al reproducir el audio")
    });
    }
localStorage.setItem("sonidoActivo", sonidoActivo);
console.log(sonidoActivo)
console.log(botonSonido)
});

botonCarta.addEventListener("click", ()=>{
modalCarta.style.display = "block";
overlay.style.display = "block";
carta.src = "./imagenes/cartaAbierta.jpg";
 sonidoPapel.volume = 0.5;
 sonidoPapel.play();
});

botonCerrarCarta.addEventListener("click", ()=>{
modalCarta.style.display = "none";
overlay.style.display = "none";
carta.src = "./imagenes/cartaCerrada.png";
 sonidoPapelCerrar.volume = 0.5;
 sonidoPapelCerrar.play();
});



const playButton = document.querySelector(".botonPlay");
const circle = document.querySelector(".circle");

/*
playButton.addEventListener("click", () => {
  // Primero, expande el círculo (oscurece la pantalla)
circle.classList.add("expand");
sonidoTransicion.volume = 0.5;
sonidoTransicion.play();
window.location.href="http://127.0.0.1:5500/creacionDePersonaje/creacionDePersonaje.html";

  // Después de 1.5s (cuando termina la expansión), vuelve a encogerlo
  setTimeout(() => {
    circle.classList.remove("expand");
    circle.classList.add("shrink");

    // Luego de la contracción, lo quita para reiniciar la animación
    setTimeout(() => {
      circle.classList.remove("shrink");
    }, 1000);
  }, 1000);
});
*/

playButton.addEventListener("click", () => {
  circle.classList.add("expand");
  sonidoTransicion.volume = 0.5;
  sonidoTransicion.play();

  // Espera 1.5 segundos para que la animación se vea
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/creacionDePersonaje/creacionDePersonaje.html";
  }, 1500);
});
