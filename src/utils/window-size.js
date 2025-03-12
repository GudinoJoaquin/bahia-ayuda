function adjustLinkTargets() {
  const isWideScreen = window.innerWidth > 768; // Verifica si la pantalla es mayor a 768px
  const links = document.querySelectorAll("a"); // Selecciona todos los enlaces

  links.forEach(anchor => {
    const isInternalLink = anchor.href.startsWith(window.location.origin); // Verifica si es un enlace interno

    if (isWideScreen && !isInternalLink) {
      // Si la pantalla es grande y el enlace es externo, abre en nueva pestaña
      anchor.target = "_blank";
    } else if (!isWideScreen || isInternalLink) {
      // Si la pantalla es pequeña o es un enlace interno, abre en la misma pestaña
      anchor.removeAttribute("target");
    }
  });
}

// Llama a la función al cargar la página
adjustLinkTargets();

// Actualiza la configuración cada vez que la ventana se redimensiona
window.addEventListener("resize", adjustLinkTargets);
