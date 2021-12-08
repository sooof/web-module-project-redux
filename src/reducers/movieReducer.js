import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const movieReducer = (state = initialState , action) => {
    // console.log("movieReducer.js movieReducer", state)
    // console.log("movieReducer.js movieReducer movies=", state.movies)
    // console.log("movieReducer.js movieReducer payload =", action.payload)
    switch(action.type) {
        case DELETE_MOVIE:
            console.log("DELETE_MOVIE")
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            console.log("ADD_MOVIE")
            const newMovie = {
                ...action.payload,
                 id: Date.now()
            }
            return {
                movies: [...state.movies, newMovie ]
            }
        default:
            return state;
    }
}

export default movieReducer;