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
const textareaEncriptar = document.getElementById('texto1');
const inputTexto = document.getElementById('cuadroTexto');
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

// Función para encriptar texto estilo César
function encriptarTexto(texto, desplazamiento) {
    return texto.replace(/[a-zA-Z]/g, function(letra) {
        var codigo = letra.charCodeAt(0);
        var mayuscula = letra === letra.toUpperCase();
        var limite = mayuscula ? 65 : 97;
        return String.fromCharCode((codigo - limite + desplazamiento) % 26 + limite);
    });
}

// Función para desencriptar texto estilo César
function desencriptarTexto(texto, desplazamiento) {
    return encriptarTexto(texto, 26 - desplazamiento);
}

// Event listener para encriptar texto
botonEncriptar.addEventListener('click', function() {
    var textoAEncriptar = textareaEncriptar.value;
    var desplazamiento = 3; // Valor de desplazamiento predeterminado
    var textoEncriptado = encriptarTexto(textoAEncriptar, desplazamiento);
    inputTexto.value = textoEncriptado;
    textareaEncriptar.value = ''; // Borrar el texto después de encriptarlo
});

// Event listener para desencriptar texto
botonDesencriptar.addEventListener('click', function() {
    var textoADesencriptar = inputTexto.value;
    var desplazamiento = 3; // Valor de desplazamiento predeterminado
    var textoDesencriptado = desencriptarTexto(textoADesencriptar, desplazamiento);
    inputTexto.value = textoDesencriptado;
    textareaEncriptar.value = ''; // Borrar el texto después de desencriptarlo
});