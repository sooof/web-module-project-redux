import { ADD_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: []
}

const favoritesReducer = (state = initialState, action) => {
    console.log("favoritesReducer.js ", state)
    switch(action.type){
        case ADD_FAVORITE:
            console.log("ADD_FAVORITE")
            // const newFavorites = {
            //     ...action.payload,
            //      id: Date.now()
            // }
            // return {
            //     ...state,
            //     favorites: [...state.favorites, newFavorites]
            // }
            return {
                ...state,
                favorites:[...state.favorites, action.payload]
            }
        default:
            return state
    }
    
}
export default favoritesReducer;