import React from 'react';
import {connect} from  'react-redux'
import { Link } from 'react-router-dom';
import {removeFavorite} from '../actions/favoritesActions'

const FavoriteMovieList = (props) => {
    // const favorites = [];

    const handleRemoveFavorite = (id) => {
        props.removeFavorite(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={()=>{handleRemoveFavorite(movie.id)}} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state) => {
    console.log("FavoriteMovieList currentState:", state)
    return {
        favorites: state.favoritesReducer.favorites 
    }
}

// export default FavoriteMovieList;
export default connect(mapStateToProps,{removeFavorite})(FavoriteMovieList);