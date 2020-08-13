import {combineReducers} from "redux";
import {moviesReducer} from "./movies.reducer";
import {genresReducer} from "./genres.reducer";

export default () => {
    return combineReducers({
        movies: moviesReducer,
        genres: genresReducer
    })
}
