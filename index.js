import { combineReducers } from 'redux';

import movieReducer from './src/reducers/movieReducer';

const rootResucer = combineReducers({
    movieReducer,
})

export default rootReducer;