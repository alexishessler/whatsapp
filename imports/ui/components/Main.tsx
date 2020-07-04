// REACT

import React from 'react';
const { useState } = React;
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import Left from './Left';
import Right from './Right';
import StyledMain from "../elements/StyledMain";
import { ChatsCollection } from "../../api/chats"; 
import { findChats } from "../../api/helpers";
import { Chat } from "../../api/models";
import _ from "lodash";

const Main = (props:any):JSX.Element => {
    Tracker.autorun(() => {
        Meteor.subscribe('chats.mine')
        Meteor.subscribe('messages.all')
        // console.log('Chats', ChatsCollection.find().fetch())
        // console.log("chats found ? -->",findChats())
    })

    const [ messageVisible, setMessageVisible ] = useState<boolean>(false)
    const [ selectedChat, setselectedChat ] = useState<Chat>({})

    const handleChatClick = (_id:string):void => {
        if(!messageVisible){
            setMessageVisible(true)
        }
        const newChat:Chat = _.find(findChats(), {_id})
        console.log('Selected Chat -->', newChat)
        setselectedChat(newChat);
    }
    
    return(
        <StyledMain>
            
            <Left 
                chats={findChats()} 
                onChatClick={handleChatClick}
                selectedChat={selectedChat}>
            </Left>
            
            <Right 
                right 
                messageVisible={messageVisible}
                selectedChat={selectedChat}>
            </Right>

        </StyledMain>
    )
}

export default Main;
