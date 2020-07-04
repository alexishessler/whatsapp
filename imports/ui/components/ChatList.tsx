import React from 'react';
import StyledChatList from '../elements/StyledChatList';
// import FontAwesome from "react-fontawesome";
import ChatItem from "./ChatItem";
import { Chat } from "../../api/models";

const ChatList= (props:any):JSX.Element => {
    const { chats } = props;
    const renderChats = ():JSX.Element[] => {
        return chats.map((chat:Chat) => {
            return (
                <ChatItem
                    key={chat._id}
                    {...chat}
                />
            )
        })
    }
    return(
        <StyledChatList>
            {renderChats()}
        </StyledChatList>
    )
}



export default ChatList;