import {users} from "./08_01.test";

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}


//users[1]

var user = {id: 100500, name: 'Igor'}  //поиск
users[user.id] = user                  //добавление
delete users[user.id]                  //удаление
users[user.id].name= 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232424, name: 'Natasha'},
    {id: 12121, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//usersArray.find(u => u.id === 1)
//usersArray.push(user)
//var usersCopy = [...usersArray.filter(), user]
//var users = usersArray.filter(u => u.id !== user.id)