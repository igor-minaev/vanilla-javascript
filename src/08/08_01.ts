export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users:UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232424': {id: 3232424, name: 'Natasha'},
    '12121': {id: 12121, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

//users[1]

var user = {id: 100500, name: 'Igor'}
users[user.id] = user

export const userArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232424, name: 'Natasha'},
    {id: 12121, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//userArray.find(u => u.id === 1)