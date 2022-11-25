//definimos variables
var peso, estatura, imc

//capturamos entradas
peso=parseFloat(prompt("digite el peso en kg: "));
estatura=parseFloat(prompt("digite la estatura en mts: "));

//proceso--calculamos
imc=peso/(estatura*estatura)

//proceso y salida
if (imc <18.5){
    document.write("bajo peso <img src='img/bajo peso.png'heith=20px','width:'20px'>")
}else if(imc >=18.5 && imc <=24.9){
    document.write("peso normal <img src='img/peso normal.png'heith=20px','width:'20px'> ");
}else if (imc >=25 && imc <=29.9){
    document.write("sobrepeso <img src='img/sobrepeso.png'heith=20px','width:'20px'>");
}else if (imc >=30 && imc <=34.9){
    document.write("obesisdad 1 <img src='img/obesidad(1).png'heith=20px','width:'20px'>");
}else if (imc >=35 && imc <=39.9){
    document.write("obesisdad 2 <img src='img/obesidad(2).png'heith='20px','width:'20px'>");
}else if (imc >=40 && imc <=49.9){
    document.write("obesisdad 3 <img src='img/obesidad(3).png'heith='20px','width:'20px'>");
}else if (imc >50){
    document.write("obesisdad 4 <img src='img/obesidad(4).png'heith='20px','width:'20px'>");
}else{
    document.write("escriba los valores numericos: ")
}