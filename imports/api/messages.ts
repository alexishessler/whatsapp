import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Chat, Message, MessageType } from "./models";
import moment from 'moment';

export const MessagesCollection = new Mongo.Collection<Message>('messages')
// console.log('MSG', MessagesCollection.find().fetch() )
// 1/3 DATA
export const dummyMessages:Message[] = [
    {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "A8iCCuD4RvJP3iay7",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "Q4Sf4NtsmHr99XbiP",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
]

// 2/3 PUBLISH
if(Meteor.isServer){
    // publicatio de tous les tchats
    Meteor.publish('messages.all', () => {
        return MessagesCollection.find({})
    })
}

// 3/3 METHODS