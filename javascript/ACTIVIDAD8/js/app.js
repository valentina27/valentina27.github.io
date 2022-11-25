

function validacampos(){
    var formulario;
    formulario=document.formUser;

    if (formulario.user.value=="") {
       document.getElementById("validaaUser").innerHTML="por favor escribir el nombre del usuario";
       formulario.user.focus();
       return false;

    }else{
        document.getElementById("validaaUser").innerHTML="";
    }

    if (formulario.email.value=="") {
        document.getElementById("validaEmail").innerHTML="por favor escribir su correo";
        formulario.email.focus();
        return false;

    }else{
        document.getElementById("validaEmail").innerHTML="";
    }

    if (formulario.password.value=="") {
        document.getElementById("validapassword").innerHTML="por favor escribir su contraseña";
        formulario.password.focus();
        return false;

    }else{
        document.getElementById("validapassword").innerHTML="";
    }

    if (formulario.passwordC.value=="") {
        document.getElementById("validapasswordC").innerHTML="por favor confirmar su contraseña";
        formulario.passwordC.focus();
        return false;

    }else{
        document.getElementById("validapasswordC").innerHTML="";
    }
    
    formulario.submit();

}