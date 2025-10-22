//seleccionamos el audio
const musicaFondo = document.getElementById("musicaFondo");
const botonSonido = document.getElementById("botonSonido");

    let sonidoActivo = false;

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
    } if(sonidoActivo === false){
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
console.log(sonidoActivo)
console.log(botonSonido)
});


