//funcion que se encargue de validar por expresion regular

function validaranio(e){

    var teclado = (document.all)?e.KeyCode : e.which;
    /* vamos aplicar una prueba logica a todo el teclado
    a partir de un patron este patron debe de ser
    numerico y solo acepta 0-9 . todo lo demas lo deja
    escapar */
    if(teclado==4) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}


function Edad(){

    var valor = document.formulario2.cantidad.value;

    //tipo de dato

    var resul = parseInt(valor);

    var odad = 2022-resul;

    

    //vamos a imprimir el resultado

    document.formulario1.edadI.value = "Año" + odad;
}

function borrar(){

    document.formulario2.año.value = "";
    document.formulario2.Anio1.value = "";
    

}
