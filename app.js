function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/o/gi, "ober")
                            .replace(/a/gi, "ai")
                            .replace(/u/gi, "ufat");

    if(texto.length != 0)
    {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con Éxito";
        muneco.src  = "Images/Muñeco.png";
    }
    else{
        muneco.src = "Images/Muñeco.png";
        tituloMensaje.textContent = "Ningún texto encontrado para encriptar";
        alert ("Debes ingresar un texto");
    }
}

function desencriptar(){;

let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("titulo-mensaje");
let muneco = document.getElementById("muneco");

let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ober/gi, "o")
                        .replace(/ai/gi, "a")
                        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value =textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con Éxito";
        muneco.src  = "Images/Muñeco.png";
    } else {
        muneco.src = "Images/Muñeco.png";
        tituloMensaje.textContent = "Ningún texto encontrado para encriptar";
        alert ("Debes ingresar un texto");
    }
}
function copiarTexto() {
    let texto = document.getElementById("texto").value;

    navigator.clipboard.writeText(texto)    
}