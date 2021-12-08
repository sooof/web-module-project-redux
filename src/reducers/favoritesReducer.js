import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    // console.log("favoritesReducer.js ", state)
    switch(action.type){
        case REMOVE_FAVORITE:
            console.log("REMOVE_FAVORITE", action.payload)
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            } 
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
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