// METEOR BACKEND

import { Meteor } from 'meteor/meteor';
import { Mongo } from "meteor/mongo";
import {createDummyUsers} from '../imports/api/helpers';
import {dummyUsers} from "../imports/api/users";

Meteor.startup(() => {
    if(Meteor.users.find().count() === 0){
        console.log('NO USERS')
        createDummyUsers(dummyUsers);
    } else {
        console.log('MORE THAN 0 USERS')
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