import React from 'react';
import { Meteor } from 'meteor/meteor';
import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import Avatar from './Avatar';
import Status from './Status';
import SearchBar from './SearchBar';
import ChatList from './ChatList';

const icons:string[] = ["circle-notch", "comment-alt", "ellipsis-v"];


const Left = (props:any):JSX.Element => {
    const avatar_url = Meteor.user().profile.picture;
    const { chats } = props;
    return(
        <StyledLeft>
            <Header icons={icons} iconClass="greyIcon">
                <Avatar avatar_url={avatar_url}/>
            </Header>
            <Status/>
            <SearchBar/>
            <ChatList chats={chats}/>
        </StyledLeft>
    )
}

export default Left;