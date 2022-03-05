

function validar(formulario){

    if(formulario.Valordelcarro.Cuotainicial.value.length < 5){
        alert("Escriba por lo menos 5 Caracteres para el valor");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "1234567890";

    var checkStr = formulario.Valordelcarro.Cuotainicial.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente numeros en el campo de Valor del Carro ");
        formulario.nombre.focus();
        return false;
    }


    

}