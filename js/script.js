var letras = ["a", "e", "i", "o", "u"];
var codigo = ["ai", "enter", "imes", "ober", "ufat"];

var inputUno = document.querySelector("#input-texto");
inputUno.focus();
function limpiarCampoUno() {
    inputUno.value = "";
    inputUno.focus();
}

var inputUno = document.querySelector("#input-texto");
inputUno.addEventListener("input", function (event) {
    var textoEntrada = this.value;
    var textoMinusculas = "";
   
    var textoValidado = ""; 
    var filtroGeneral = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    
    for (var i = 0; i < textoEntrada.length; i++) {
        for (var j = 0; j < filtroGeneral.length; j++) {
           
            if (filtroGeneral[j] == textoEntrada[i]) {
                
                textoValidado += textoEntrada[i];
            }
        }
    }

    textoMinusculas = textoValidado.toLowerCase(); 
    this.value = textoMinusculas;
});

var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();
    var copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");
    alert("Mensaje copiado en el portapapeles.");
});






