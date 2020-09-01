import {combineReducers} from "redux";
import {moviesReducer} from "./movies.reducer";
import {genresReducer} from "./genres.reducer";
import {moviesSearchReducer} from "./moviesSearch.reducer";
import {moviesSortingReducer} from "./moviesSorting.reducer";
import {moviesReviewsReducer} from "./reviews.reducer";
import {videosReducer} from "./videos.reducer";

export default () => {
    return combineReducers({
        movies: moviesReducer,
        genres: genresReducer,
        moviesSearch: moviesSearchReducer,
        moviesSort: moviesSortingReducer,
        reviews: moviesReviewsReducer,
        videos: videosReducer
    })
}
