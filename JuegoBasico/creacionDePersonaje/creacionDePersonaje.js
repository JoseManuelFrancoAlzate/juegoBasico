window.addEventListener("load", () => {
  const circle = document.getElementById("circle");
  const transicionFinalSonido = document.getElementById("transicionFinalSonido");
  const botonSonido = document.getElementById("activarSonido");

  // Verificar si el usuario activó el sonido antes
  const sonidoActivo = localStorage.getItem("sonidoActivo") === "true";

  // Si el sonido ya está activo, ocultamos el botón
  if (sonidoActivo) {
    botonSonido.style.display = "none";
    reproducirSonido();
  }

  // Al presionar el botón, activar sonido y guardar preferencia
  botonSonido.addEventListener("click", () => {
    localStorage.setItem("sonidoActivo", "true");
    reproducirSonido();
    botonSonido.style.display = "none";
  });

  function reproducirSonido() {
    if (transicionFinalSonido) {
      transicionFinalSonido.volume = 0.5;
      transicionFinalSonido.play()
        .then(() => console.log("🔊 Sonido reproducido"))
        .catch(() => console.log("⚠️ El navegador bloqueó el sonido"));
    }
  }

  // Animación del círculo
  setTimeout(() => {
    circle.classList.add("shrink");
  }, 500);
});
