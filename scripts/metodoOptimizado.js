function obtenerString(ids, variable, min, max){
    let apuntar = document.getElementById(ids);
    if(validarString(apuntar.value, min, max)){
        apuntar.classList.remove("border-red");
        return apuntar;
    }else{
        alert(variable+" no válido");
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
        alert(variale+" no válido");
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
    if (min !== undefined && numero < min){
        return false;
    } 
    if (max !== undefined && numero > max){
        return false;
    } 
    return true;
}

function validarString(text, min, max){
    if (typeof text !== "string") {
        return false;
    }
    let trimmedText = text.trim();
    if(trimmedText.length >= min && trimmedText.length <= max){
        return true;
    }else{
        return false;
    }
}