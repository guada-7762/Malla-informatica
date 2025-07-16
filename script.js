document.addEventListener("DOMContentLoaded", function () {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach((ramo, index) => {
    // Cargar estado guardado (si existe)
    const estado = localStorage.getItem(`ramo_${index}`);
    if (estado === "aprobado") {
      ramo.classList.add("aprobado");
    }

    // Al hacer clic, alternar clase y guardar/eliminar en localStorage
    ramo.addEventListener("click", function () {
      ramo.classList.toggle("aprobado");

      if (ramo.classList.contains("aprobado")) {
        localStorage.setItem(`ramo_${index}`, "aprobado");
      } else {
        localStorage.removeItem(`ramo_${index}`);
      }
    });
  });
});

