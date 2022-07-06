import {GovernmentBuildings, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings= (buildings: Array<GovernmentBuildings>)=>{
    return buildings.map(b=>b.address.street.title)
}

export const getStreetsTitlesOfHouses= (houses: Array<HouseType>)=>{
    return houses.map(h=>h.address.street.title)
}

export const createMessages= (houses: Array<HouseType>)=>{
    let callbackfn=(h:HouseType)=>`Hello guys from ${h.address.street.title}`
    return houses.map(callbackfn)
}