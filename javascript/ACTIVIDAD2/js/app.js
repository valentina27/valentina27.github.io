//aplicacion para evaluar la fiebre de una persona
var temp ;

//captura los datos de entrada
parseFloat(prompt("ingrese su temperatura en °c" ));

//proceso para evaluar la fiebre
if (temp >=38){
    document.write("la temperatura "+ temp +" °c indica fiebre");
}
 else{
    document.write("la temperatura "+ temp +" °c indica sin fiebre");
}
   
