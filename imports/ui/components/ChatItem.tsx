import React from 'react';
import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';
import Moment from 'react-moment';
import moment from 'moment';

const ChatItem= (props:any):JSX.Element => {
    const { title, 
        picture, 
        lastMessage, 
        onChatClick, 
        _id, 
        active } = props;
    const { content, createdAt } = lastMessage;
    const now:string = moment().format("DD/MM/YYYY");
    // console.log("now", now);
    // console.log("createdAt", createdAt)
    // console.log("createdAt Formated", moment(createdAt).format("DD/MM/YYYY"));
    const today:boolean = now === moment(createdAt).format("DD/MM/YYYY");
    return(
        <StyledChatItem onClick={() => onChatClick(_id)} active={active}>
            <Avatar large avatar_url={picture}/>
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title">
                        { title }
                    </span>
                    <div className="content--line1__date">
                        {
                            today ? (
                                <Moment format="HH:mm">
                                    { createdAt }
                                </Moment>
                            ) : (
                                <Moment format="DD/MM/YYYY">
                                    { createdAt }
                                </Moment>
                            )
                        }
                 
                    </div>
                </div>
                <div className="content--line1">
                    <span className="content--message">
                        { content }
                    </span>
                    <div className="chat--badge">
                        4
                    </div>
                </div>
            </div>
        </StyledChatItem>
    )
}



export default ChatItem;