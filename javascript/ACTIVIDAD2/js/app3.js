//aplicacion para evaluar un numero si es positivo o negativo

var numero;

//captura la entrada
numero=parseInt(prompt("digite el numero entero"));
if (numero>0) {
    document.write("el numero" + numero +"si es un positivo");
} else {
    document.write("el numero" + numero + "es un numero negativo");
}