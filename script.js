const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje1");
const textouno = document.getElementsByClassName("texto1Muneco")[0];
const textodos = document.getElementsByClassName("texto2Muneco")[0];

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//Funcion Para Vadidar Minusculas
function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);
    
    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

// Funcion Boton Encriptar
function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        textouno.style.display = "none";
        textodos.style.display = "none";
                    
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

// Funcion Boton Desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    return stringDesencriptada;
}
// Funcion Boton Copiar
// Referencia al textarea y al botón
var textarea = document.querySelector(".mensaje1");
var copyButton = document.querySelector(".btn-copiar");

// Agrega un evento click al botón
copyButton.addEventListener("click", function() {
  // Selecciona el contenido del textarea
  textarea.select();
  // Copia el contenido al portapapeles
  document.execCommand("copy");
  // Mostrar un mensaje al copiar
  alert("Texto copiado al portapapeles: " + textarea.value);
});
