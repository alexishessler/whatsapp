import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Chat } from "./models";
import moment from 'moment';

export const ChatsCollection = new Mongo.Collection<Chat>('chats')

// 1/3 DATA
export const dummyChats:Chat[] = [
    {
        title:"",
        picture:"",
        participants:["7gzm7Le4gmeZhtvXi", "9qcnCd9qBP9eFoG2z"],
        lastMessage: {
            content: "Salut, ça va ?",
            createdAt: moment()
                        .toDate()
        }
    },
    {
        title:"",
        picture:"",
        participants:["z6sXYipQLN385sLQh", "7gzm7Le4gmeZhtvXi"],
        lastMessage: {
            content: "Bah alors, on répond plus aux messages ??",
            createdAt: moment()
                        .subtract(1, "days")
                        .toDate()
        }
    },
    {
        title:"",
        picture:"",
        participants:["9qcnCd9qBP9eFoG2z", "z6sXYipQLN385sLQh"],
        lastMessage: {
            content: "Hello l'ami !!",
            createdAt: moment()
                        .subtract(2, "days")
                        .toDate()
        }
    },
]

// 2/3 PUBLISH
if(Meteor.isServer){
    // publicatio de tous les tchats
    Meteor.publish('chats.all', () => {
        return ChatsCollection.find({})
    })
    // publicatio de tous les tchats auxquels je suis membre, pour souscription depuis le client
    Meteor.publish('chats.mine', () => {
        return ChatsCollection.find({
            participants: {
                $in: [Meteor.userId()] 
            }
        })
    })

}

// 3/3 METHODS