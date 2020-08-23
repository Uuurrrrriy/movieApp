import { batch } from 'react-redux'
import {accessToken} from "../constants";
import {
    GET_SORT_MOVIES,
    GET_SORT_MOVIES_ERROR, LOADING_SORT_MOVIES_END,
    LOADING_SORT_MOVIES_START
} from "../actionTypes/moviesSorting.actionTypes";

export const getSortMoviesSuccess = (moviesSort) => ({ type: GET_SORT_MOVIES, payload: moviesSort });
export const getSortMoviesError = (error) => ({ type: GET_SORT_MOVIES_ERROR, payload: error });
export const startSortLoading = () => ({ type: LOADING_SORT_MOVIES_START });
export const endSortLoading = () => ({ type: LOADING_SORT_MOVIES_END });

export const getSortingMovies = (page, sortType) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&sort_by=${sortType}&page=${page}`;
    return (dispatch) => {
        dispatch(startSortLoading());
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response;
            })
            .then((response) => {
                return response.json();
            })
            .then( (data) => {
                batch( () => {
                    dispatch(endSortLoading());
                    // dispatch(getMoviesSuccess(data.results));
                    dispatch(getSortMoviesSuccess({
                        movieSortingList: data.results,
                        page: data.page,
                        totalPages: data.total_pages
                    }));
                } )
            } )
            .catch(error => {
                batch ( () => {
                    dispatch(endSortLoading());
                    dispatch(getSortMoviesError(error))
                })
            })
    }
};
