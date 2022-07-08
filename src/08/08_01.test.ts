type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '3232424': {id: 3232424, name: 'Natasha'},
        '12121': {id: 12121, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})

test('should update corresponding user from obj', () => {
    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina')
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
})

test('should delete corresponding user ', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()

})

