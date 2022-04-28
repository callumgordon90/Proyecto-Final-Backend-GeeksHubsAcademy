//Various error responses for when people make a mistake in signing up
module.exports.signUpErrors = (err) =>{
    let errors = { pseudo: '', email: '', password: ''}

    if (err.message.includes('pseudo'))
        errors.pseudo= "The username is either incorrect or already registered";

    if (err.message.includes('email'))
        errors.email = "The email address is incorrect";

    if (err.message.includes('password'))
        errors.password = "The password must contain a minimum of six characters";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.email = "This username is already registered";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "This email address is already registered";

    return errors;
};


//Various error responses for when people make a mistake in logging in 
module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}

    if (err.message.includes("email"))
        errors.email = "Email not recognised";

    if (err.message.includes('password'))
        errors.password = "Incorrect password";

    return errors;
}