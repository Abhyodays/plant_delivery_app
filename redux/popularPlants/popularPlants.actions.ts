import { GET_POPULAR_PLANTS_REQUEST } from "./popularPlants.types"

export const getPopularPlants = ()=> (
    {
        type: GET_POPULAR_PLANTS_REQUEST,
    }
)