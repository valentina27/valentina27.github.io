var op;
var n1, n2, resultado;

op=parseInt(prompt(" escoja una opcion del menu "));

switch (op) {
    case 1:
    n1=parseInt(prompt("digite el primer N°:"))
    n2=parseInt(prompt("digite el segundo  N°:"))
    resultado=n1+n2;
    document.write("la suma de: "+n1+"+"+n2+"es:" +resultado)
        
    break;
    case 2:
    n1=parseInt(prompt("digite el primer N°:"))
    n2=parseInt(prompt("digite el segundo  N°:"))
    resultado=n1-n2;
    document.write("la resta de: "+n1+"-"+n2+"es" +resultado)

    break;
    case 3:
    n1=parseInt(prompt("digite el primer N°:"))
    n2=parseInt(prompt("digite el segundo  N°:"))
    resultado=n1*n2;
    document.write("la meltiplicacion de: "+n1+"*"+n2+"es" +resultado)

    break;
    case 4:
    n1=parseInt(prompt("digite el primer N°:"))
    n2=parseInt(prompt("digite el segundo  N°:"))
    resultado=n1/n2;
    document.write("la division de: "+n1+"/"+n2+"es" +resultado)
    
    break;

    default:
        document.write("selecciones una opcion del menu")
        break;
}