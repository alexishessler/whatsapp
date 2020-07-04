// Functions for server

import { User, Chat, Message } from "./models";
import { ChatsCollection } from "./chats";
import { MessagesCollection } from "./messages";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

export const createDummyUsers = (users:User[]) => {
    users.forEach((user) => {
        const {username, profile, password} = user;
        Accounts.createUser({
            username, 
            profile, 
            password
        })
    });
}

export const createDummyChats = (chats:Chat[]) => {
    chats.forEach((chat) => {
        ChatsCollection.insert(chat)
    })
}

export const findChats = ():Chat[] => {
    return ChatsCollection.find().fetch()
        .map((chat) => {
            const otherUserId = findOtherId(chat.participants);
            const { username, profile } = findOtherUser(otherUserId);
            return {
                ...chat,
                title: username,
                picture: profile.picture,
            }
        })
}

const findOtherId = (participants:string[]):string => {
    const myId:string = Meteor.userId();
    let otherUserId:string;
    if(myId === participants[0]){
        otherUserId = participants[1]
    } else {
        otherUserId = participants[0]
    }
    return otherUserId;
}

const findOtherUser = (_id:string):User => {
    return Meteor.users.findOne({_id});
}

export const createDummyMessages = (messages:Message[]) => {
    messages.forEach((message) => {
        MessagesCollection.insert(message)
    })
}