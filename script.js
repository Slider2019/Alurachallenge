document.getElementById('texto1').addEventListener('input', function() {
    var boton = document.getElementById('botonCopiar');
    var mensaje = document.getElementById('texto');
    var imagen = document.querySelector('.jovenConLupa');
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

document.getElementById('botonCopiar').addEventListener('click', function() {
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

// Obtener elementos del DOM
const textareaEncriptar = document.getElementById('texto1');//.texto1
const inputTexto = document.getElementById('cuadroTexto');//.cuadroTexto
const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');

// Sincronizar texto entre textarea y input
textareaEncriptar.addEventListener('input', function() {
    inputTexto.value = this.value;
});

inputTexto.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        botonDesencriptar.classList.remove('desactivado');
    } else {
        botonDesencriptar.classList.add('desactivado');
    }
});

// Borrar texto del textarea al hacer clic en el botón "Encriptar"
botonEncriptar.addEventListener('click', function() {
    textareaEncriptar.value = '';
});

// Función para encriptar texto (por implementar)
function encriptarTexto(texto) {
    // Aquí puedes agregar la lógica para encriptar el texto
    return texto;
}

// Función para desencriptar texto (por implementar)
function desencriptarTexto(texto) {
    // Aquí puedes agregar la lógica para desencriptar el texto
    return texto;
}