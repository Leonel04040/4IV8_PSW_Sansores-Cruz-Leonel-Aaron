//funcion que se encargue de validar por expresion regular

function validarn(e){

    var teclado = (document.all)?e.KeyCode : e.which;
    /* vamos aplicar una prueba logica a todo el teclado
    a partir de un patron este patron debe de ser
    numerico y solo acepta 0-9 . todo lo demas lo deja
    escapar */
    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}


function interes(){

    var valor = document.formulario1.cantidad.value;

    //tipo de dato

    var resul = parseInt(valor);

    var interes = resul*0.025;

    var total = resul + interes;

    //vamos a imprimir el resultado

    document.formulario1.sueldoI.value = "$" + total;
}

function borrar(){

    document.formulario1.sueldoI.value = "";
    document.formulario1.cantidad.value = "";
}