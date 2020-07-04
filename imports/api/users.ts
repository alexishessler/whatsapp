import { User } from "./models";
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';

// 1/3 DATA
export const dummyUsers:User[] =  
[
    {
        _id: '0',
        username: 'Ethan Gonzalez',
        password: "password",
        profile: {
            phone: '+222222222',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '1',
        username: 'Bryan Wallace',
        password: "password",
        profile: {
            phone: '+333333333',
            picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '2',
        username: 'Avery Stewart',
        password: "password",
        profile: {
            phone: '+444444444',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '3',
        username: 'Katie Peterson',
        password: "password",
        profile: {
            phone: '+555555555',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '4',
        username: 'Ray Edwards',
        password: "password",
        profile: {
            phone: '+666666666',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '5',
        username: 'Samy Smith',
        password: "password",
        profile: {
            phone: '+777777777',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '6',
        username: 'John Smith',
        password: "password",
        profile: {
            phone: '+888888888',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '7',
        username: 'Adrianna Scott',
        password: "password",
        profile: {
            phone: '+999999999',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '8',
        username: 'Julienne Smith',
        password: "password",
        profile: {
            phone: '+999999999',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }, {
        _id: '9',
        username: 'Marco',
        password: "password",
        profile: {
            phone: '+101010101',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
            actu: "Salut j'utilise whatsapp"
        }
    }
]
// 2/3 PUBLISH
if(Meteor.isServer){
    Meteor.publish('users.all', () => {
        return Meteor.users.find({}, {
            fields: {services: 0}
        })
    })
}

// 3/3 METHODS
Meteor.methods({
    'user-login': ({username, phone, password}) => {
        console.log("IM HERREEEEEEE >-------->")
        let user = Accounts.findUserByUsername(username)
        if(user){
            console.log('---> User exists')
            console.log(user)
            return true;
        } else {
            console.log('---> User does not exist')
            return Accounts.createUser({
                username,
                password,
                profile: {
                    phone,
                    picture: 'https://t3.ftcdn.net/jpg/01/09/00/64/240_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg',
                    actu: "Salut j'utilise whatsapp"
                }
            });
        }
        
    }
})
    
