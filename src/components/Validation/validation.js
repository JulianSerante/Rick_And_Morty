
const validation = (userData) => {

    let errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.username)){
        errors.username = 'Email inválido';
    }
    if(!userData.username){
        errors.username = 'Ingrese su email para ingresar';
    }
    if(userData.username.length > 35){
        errors.username = 'El email no puede superar los 35 caracteres';
    }
    if(!userData.password.match(/\d/)){
        errors.password = 'La contraseña debe contener al menos un número';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
    return errors;
}

export default validation;