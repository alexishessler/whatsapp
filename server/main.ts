// METEOR BACKEND

import { Meteor } from 'meteor/meteor';
import { Mongo } from "meteor/mongo";
import {createDummyUsers, createDummyChats, createDummyMessages} from '../imports/api/helpers';
import {dummyUsers} from "../imports/api/users"; // no need to import the collection because Meteor.users.find()
import {dummyChats, ChatsCollection} from "../imports/api/chats";
import {dummyMessages, MessagesCollection} from "../imports/api/messages";


Meteor.startup(() => {
    const numberOfUsers = Meteor.users.find().count()
    const numberOfChats = ChatsCollection.find().count()
    const numberOfMessages = MessagesCollection.find().count()
    
    if(numberOfUsers === 0){
        console.log('NO USERS')
        createDummyUsers(dummyUsers);
    } else {
        console.log('MORE THAN 0 USERS')
    }

    if(numberOfChats === 0){
        console.log('NO CHATS')
        createDummyChats(dummyChats);
    } else {
        console.log('MORE THAN 0 CHATS')
    }

    if(numberOfMessages === 0){
        console.log('NO MESSAGE')
        console.log("CREATION WILL OPERATE HERE !!")
        console.log('numberOfMessages', numberOfMessages)
        createDummyMessages(dummyMessages); 
    } else {
        console.log('MORE THAN 0 MESSAGES')
        console.log('numberOfMessages', numberOfMessages)
    }

})



// need to add 
// meteor add accounts-password 
// and 
// meteor add accounts-base

// meteor mongo
// show colletions
// db.users.find().pretty()

// Meteor.startup(() => {
//     console.log(' -----> here')
//     // const UsersCollection = new Mongo.Collection('users');
//     // console.log(UsersCollection.find().count())
//     console.log(Meteor.users.find().count())
//     // if(UsersCollection.find().count() === 0){
//     //     console.log('NO USERS')
//     //     // createDummyUsers(dummyUsers);
//     // } else {
//     //     console.log('MORE THAN 0 USERS')
//     // }
// })


// const numberOfUsers:number = Meteor.users.find().count();
//     if(numberOfUsers === 0){
//         console.log('There is no user saved')
//     } else {
//         console.log('There are many users')
//     }