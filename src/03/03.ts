import {StudentType} from "../02/02";

debugger

export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(sum(1, 2), sum(1, 3))


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({id: new Date().getTime(), title: skill})
}

export function makeSudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn=(s:StudentType, cityName:string)=>{
    return s.address.city.title===cityName
}