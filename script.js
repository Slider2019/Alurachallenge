document.getElementById('texto1').addEventListener('input', function() {
    var boton = document.getElementById('botoncopiar');
    var mensaje = document.getElementById('texto');
    var imagen = document.querySelector('.jovenconlupa');
    var campoTexto = this;

    if (campoTexto.value.length > 0) {
        boton.style.display = 'block';
        mensaje.style.display = 'none';
        imagen.style.display = 'none';
        campoTexto.style.transform = 'translateY(-550px)';
        ajustarAlturaTextarea(campoTexto); // Llama a la función para ajustar la altura del textarea
    } else {
        boton.style.display = 'none';
        mensaje.style.display = 'block';
        imagen.style.display = 'block';
        campoTexto.style.transform = 'translateY(0)';
        campoTexto.style.height = ''; // Restablece la altura del textarea
    }
});

document.getElementById('botoncopiar').addEventListener('click', function() {
    var campoTexto = document.getElementById('texto1');
    campoTexto.select(); // Selecciona el contenido del campo de texto
    document.execCommand('copy'); // Copia el contenido al portapapeles
    alert('¡Contenido copiado al portapapeles!'); // Alerta al usuario
});

function ajustarAlturaTextarea(textarea) {
    var alturaMaxima = 750; // Altura máxima del textarea en píxeles
    var alturaActual = textarea.scrollHeight; // Altura actual del textarea

    if (alturaActual <= alturaMaxima) {
        textarea.style.height = alturaActual + 'px'; // Ajusta la altura del textarea
    } else {
        textarea.style.height = alturaMaxima + 'px'; // Establece la altura máxima
        textarea.style.overflowY = 'clip'; // Agrega desplazamiento vertical si se excede la altura máxima
    }
}