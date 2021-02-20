module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username no debe estar vacío';
    }
    if(email.trim() === ''){
        errors.email = 'Email no debe estar vacío';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Debe ser una dirección de correo electrónico válida';
        }
    }
    if(password === ''){
        errors.password = 'Password no debe estar vacía';
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords deben coincidir';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };

};

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username no debe estar vacío';
    }
    if(password.trim() === ''){
        errors.password = 'Password no debe estar vacia'; 
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
}
