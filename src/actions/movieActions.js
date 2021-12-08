export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    console.log("Action deleteMovie id = ", id)
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (item)=>{
    console.log("Action deleteMovie id = ", item)
    return({type: ADD_MOVIE, payload:item});
}