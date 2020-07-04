import React from 'react';
import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';

const messageText = "WhatsApp se connecte à votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau WIFI."

const Right = (props:any):JSX.Element => {
    const { right, messageVisible, selectedChat } = props;
    return(
        <StyledRight>
            {
                messageVisible ? (
                    <MessageView selectedChat={selectedChat}/>
                ) : (
                    <RightImg right={right} messageText={messageText}/>
                )
            }
        </StyledRight>
    )
}

export default Right;