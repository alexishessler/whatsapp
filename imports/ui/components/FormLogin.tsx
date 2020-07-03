// REACT

import React from 'react';
import StyledFormLogin from '../elements/StyledFormLogin';

const FormLogin = (props:any):JSX.Element => {
    const [state, setState] = React.useState<any>({
        username: "",
        phone: "",
        password: "",
    });
    const { username, phone, password } = state;
    const handleChange = (e):void => {
        const inputValue:string = e.target.value;
        const inputName:string = e.target.name;
        setState( (prevState) => (
            {
                ...prevState,
                [inputName]: inputValue
            }
        ));
    }
    return(
        <StyledFormLogin>
            <label className="label">
                <input 
                value={username} 
                onChange={handleChange}
                type="text" 
                className="input" 
                name="username" 
                placeholder="Nom d'utilisateur"/>
            </label>
            <label className="label">
                <input 
                value={phone} 
                onChange={handleChange}
                type="number" 
                className="input" 
                name="phone" 
                placeholder="Téléphone"/>
            </label>
            <label className="label">
                <input 
                value={password} 
                onChange={handleChange}
                type="password" 
                className="input" 
                name="password" 
                placeholder="Mot de passe"/>
            </label>
            <button onClick={() => props.onLogin(state)} className="loginBtn">CONNEXION</button>
        </StyledFormLogin>
    )
}

export default FormLogin;
