import React from 'react';
import StyledChatList from '../elements/StyledChatList';
// import FontAwesome from "react-fontawesome";
import ChatItem from "./ChatItem";
import { Chat } from "../../api/models";

const ChatList= (props:any):JSX.Element => {
    const { chats, onChatClick, selectedChat } = props;
    const renderChats = ():JSX.Element[] => {
        return chats.map((chat:Chat) => {
            const active:boolean = selectedChat._id === chat._id  
            return (
                <ChatItem
                    key={chat._id}
                    {...chat}
                    onChatClick={onChatClick}
                    active={active}
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