export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232424': {id: 3232424, name: 'Natasha'},
    '12121': {id: 12121, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
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