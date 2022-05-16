import React, { useEffect, useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = (props ) => {
    const [signUpModel, setSignUpModel] = useState(props.signup);
    const [signInModel, setSignInModel] = useState(props.signin);

    const handleModels = (e) => {
        if (e.target.id == "register") {
            setSignInModel(false);
            setSignUpModel(true);
        } else if (e.target.id == "login") {
            setSignUpModel(false);
            setSignInModel(true);
        }
    }


    return (
        <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModels} id="register"
                        className={signUpModel ? "active-btn" : null}>

                        Register</li>

                    <li onClick={handleModels} id="login"
                        className={signInModel ? "active-btn" : null}>

                        Login</li>
                </ul>
                {signUpModel && <SignUpForm />}
                {signInModel && <SignInForm />}
            </div>
        </div>
    );
};

export default Log;