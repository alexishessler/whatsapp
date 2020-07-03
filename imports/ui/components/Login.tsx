// REACT
import React from 'react';
import RightImg from "./RightImg";
import FormLogin from "./FormLogin";
import { Meteor } from 'meteor/meteor';
// import { Accounts } from 'meteor/accounts-base';

const messageText:string = "Connectez-vous afin de lancer une conversation"

const Login = (props:any):JSX.Element => {
    const handleLogin = (state:any):void => {
        const { password, username } = state;
        Meteor.call('user-login', state, (err, res) => {
            if(err){
                console.log("err", err)
            } else {
                console.log("res", res)
                Meteor.loginWithPassword(username, password, (error) => {
                    if(error){
                        console.log('error', error)
                    } else {
                        console.log('success')
                        props.history.push('/chats')
                    }
                });
            }
        })
    }
    return(
        <RightImg messageText={messageText}>
            <FormLogin onLogin={handleLogin}/>
        </RightImg>
    )
}

export default Login;
