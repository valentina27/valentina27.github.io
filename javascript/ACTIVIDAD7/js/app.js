function sumar(){
    var x,y,suma
    x=document.getElementById("n1").value 
    y=document.getElementById("n2").value

    suma=parseInt(x)+parseInt(y)

    document.getElementById("resultado_suma").innerHTML ="la suma es: "+suma
}

function restar(){
    var x,y,resta
    x=document.getElementById("n1").value 
    y=document.getElementById("n2").value

    resta=parseInt(x)-parseInt(y)

    document.getElementById("resultado_resta").innerHTML ="la resta es: "+resta
}

function multiplicar(){
    var x,y,multiplicacion
    x=document.getElementById("n1").value 
    y=document.getElementById("n2").value

    multiplicacion=parseInt(x)*parseInt(y)

    document.getElementById("resultado_multiplicacion").innerHTML ="la multiplicacion es: "+multiplicacion
}
function dividir(){
    var x,y,division
    x=document.getElementById("n1").value 
    y=document.getElementById("n2").value

    division=parseInt(x)/parseInt(y)

    document.getElementById("resultado_division").innerHTML ="la division es: "+division
}
