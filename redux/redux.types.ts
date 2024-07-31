import { Plant } from "../types/Plant"

export type stateType = {
    plants: Plant[],
    // error:string|null,
}
export type actionType = {
    type:string,
    payload: Plant[]
}