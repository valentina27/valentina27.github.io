//funcion que suma 2 numeros
function sumar() {
 var x,y,suma;
 
 x=document.getElementById("n1").value
 y=document.getElementById("n2").value 

 suma=parseInt(x)+parseInt(y)

 document.getElementById("resultado").innerHTML = "la suma es: "+suma 
    
}