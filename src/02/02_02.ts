export type StreetType = {
    title: string
}

export type AdressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AdressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<string>
    citizensNumber: number
}