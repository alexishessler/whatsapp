import React from 'react';
const { useState } = React;
import StyledFooter from '../elements/StyledFooter';
// import { Chat } from "../../api/models";
import FontAwesome from "react-fontawesome";

const Footer = (props:any):JSX.Element => {  
    const [inputValue, setInputValue] = useState<string>('');
    const [iconName, setIconName] = useState<string>('microphone');
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value)
        const name:string = e.target.value !== "" ? "paper-plane" : "microphone";
        setIconName(name)
    }
    return(
        <StyledFooter>
            <FontAwesome 
                name="smile"
                className="iconFooter"/>
            <label className="message--label">
                <input 
                    className="message--input" 
                    placeholder="Tapez votre message"
                    value={inputValue}
                    onChange={handleChange}
                    type="text"/>
            </label> 
            <FontAwesome 
                name={iconName}
                className="iconFooter"/>
        </StyledFooter>
    )
}

export default Footer;