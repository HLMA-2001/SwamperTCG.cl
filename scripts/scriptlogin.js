function registros(e){
    e.preventDefault();
    document.getElementById("caja-login").style.display= "none";
    document.getElementById("caja-registro").style.display = "block";
}

function logins(e){
    e.preventDefault();
    document.getElementById("caja-registro").style.display = "none";
    document.getElementById("caja-login").style.display = "block";
}

document.getElementById("ir-a-registro").addEventListener("click" , registros);
document.getElementById("ir-a-login").addEventListener("click" , logins);

function obtenerRegistros(){
    let usuario = obtenerString("reg-usuario", "Usuario", 3,20);
    let correo = obtenerString("reg-correo", "Correo", 5,50);
    let contraseña = obtenerString("reg-contraseña", "Contraseña", 6,20);

    if (usuario === null || correo === null || contraseña === null){
        return null;
    }
    return{
        usuario: usuario.value.trim(),
        correo: correo.value.trim(),
        contraseña: contraseña.value
    };
}
document.getElementById("form-registro").addEventListener("submit", function(e){
    e.preventDefault();

    const datos = obtenerRegistro();
    if (datos === null) {
        return; 
    }
    console.log("Datos válidos:", datos);
    alert("Registro válido (por ahora solo se valida, falta guardarlo)");
});
    /*    document.getElementById("caja-registro").style.display= "none";
        document.getElementById("caja-registradas").style.display= "block";
        document.getElementById("Texto-registro").innerHTML = "Usuario " + datos.usuario + " Registrado";
        setTimeout(function (){window.location.href = "/index.html"}, 2000)
    */

function obtenerString(ids, variable, min, max){
    let apuntar = document.getElementById(ids);
    if(validarString(apuntar.value, min, max)){
        apuntar.classList.remove("border-red");
        return apuntar;
    }else{
        alert(variable + " no válido");
        apuntar.classList.add("border-red");
        apuntar.focus();
        return null;
    }
}

function obtenerFloat(ids, variable, min, max){
    let apunta = document.getElementById(ids);
    if(validarFloat(apunta.value, min, max)){
        apunta.classList.remove("border-red");
        return apunta;
    }else{
        alert(variable + " no válido");
        apunta.classList.add("border-red");
        apunta.focus();
        return null;
    }
}

function validarFloat(value, min, max){
    let trimmedValue = value.trim();
    if (trimmedValue === "" || isNaN(trimmedValue)) {
        return false;
    }
    let numero = parseFloat(trimmedValue);
    if (min !== undefined && numero < min) return false;
    if (max !== undefined && numero > max) return false;
    return true;
}

function validarString(text, min, max){
    if (typeof text !== "string") return false;
    let trimmedText = text.trim();
    return trimmedText.length >= min && trimmedText.length <= max;
}