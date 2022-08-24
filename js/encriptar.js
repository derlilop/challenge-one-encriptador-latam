var botonEncriptar = document.querySelector("#btn-encriptar");


botonEncriptar.addEventListener("click", function (event) {
    
    event.preventDefault();
    
    var inputUno = document.querySelector("#input-texto");
    
    var valorInputUno = inputUno.value;
    
    var inputDos = document.querySelector("#msg");
    var mensajeEncriptado = "";
    
    for (var i = 0; i < valorInputUno.length; i++) {
        if (valorInputUno[i] == letras[0]) {
            mensajeEncriptado += valorInputUno[i].replace(letras[0], codigo[0]);

        } else if (valorInputUno[i] == letras[1]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[1], codigo[1]);

        } else if (valorInputUno[i] == letras[2]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[2], codigo[2]);

        } else if (valorInputUno[i] == letras[3]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[3], codigo[3]);

        } else if (valorInputUno[i] == letras[4]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[4], codigo[4]);

        } else {
            mensajeEncriptado += valorInputUno[i];
        }
    }

    
    inputDos.value = mensajeEncriptado;
    
    limpiarCampoUno();
});
