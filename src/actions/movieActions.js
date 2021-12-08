export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    console.log("Action deleteMovie id = ", id)
    return({type: DELETE_MOVIE, payload:id});
}