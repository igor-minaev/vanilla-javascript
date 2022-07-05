import {ManType} from "./05_01";

let people: Array<ManType> = []

beforeEach(()=>{
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})

test