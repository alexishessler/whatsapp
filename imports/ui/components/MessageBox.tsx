import React from 'react';
const { useState } = React;
import StyledMessageBox from '../elements/StyledMessageBox';
// import { Chat } from "../../api/models";
import FontAwesome from "react-fontawesome";
import { Meteor } from 'meteor/meteor';
import _ from "lodash";
import moment from 'moment';
import 'moment/locale/fr';

let isEven:boolean = false;
const format:string = "D MMMM Y"

const MessageBox = (props:any):JSX.Element => {  
    const {messages} = props;
    console.log("messages from MessageBox", messages)
    messages.forEach((message) => {
        if(!message.senderId){
            message.ownership = !!message.ownership === isEven ? 'mine' : 'other';
            isEven = !isEven;
            return message;
        } else {
            message.ownership = message.senderId === Meteor.userId() ? "mine" : 'other';
        }
    })
    // objet dictionnaire
    const groupedMessages:any = _.groupBy(messages, message => {
        return (
            moment(message.createdAt).format(format)
        )

    })
    console.log("groupedMessages",groupedMessages)
    const newMessages:any[] = Object.keys(groupedMessages)
                                .map((key) => {
                                    return {
                                        date: key,
                                        groupedMessages: groupedMessages[key],
                                        today: moment().format(format) === key
                                    }
                                })
    console.log("newMessages",newMessages)
    return(
        <StyledMessageBox>
            <p>toto</p>
        </StyledMessageBox>
    )
}

export default MessageBox;