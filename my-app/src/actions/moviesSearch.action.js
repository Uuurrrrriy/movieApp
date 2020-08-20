import { batch } from 'react-redux'
import {
    GET_SEARCH_MOVIES,
    GET_SEARCH_MOVIES_ERROR, LOADING_SEARCH_MOVIES_END,
    LOADING_SEARCH_MOVIES_START
} from "../actionTypes/moviesSearch.actionTypes";
import {accessToken} from "../constants";

export const getSearchMoviesSuccess = (moviesSearch) => ({ type: GET_SEARCH_MOVIES, payload: moviesSearch });
export const getSearchMoviesError = (error) => ({ type: GET_SEARCH_MOVIES_ERROR, payload: error });
export const startSearchLoading = () => ({ type: LOADING_SEARCH_MOVIES_START });
export const endSearchLoading = () => ({ type: LOADING_SEARCH_MOVIES_END });

export const getSearchMovies = (page, query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${accessToken}&query=${query}&page=${page}`;
    return (dispatch) => {
        dispatch(startSearchLoading());
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
                    dispatch(endSearchLoading());
                    // dispatch(getMoviesSuccess(data.results));
                    dispatch(getSearchMoviesSuccess({
                        movieSearchList: data.results,
                        page: data.page,
                        totalPages: data.total_pages
                    }));
                } )
            } )
            .catch(error => {
                batch ( () => {
                    dispatch(endSearchLoading());
                    dispatch(getSearchMoviesError(error))
                })
            })
    }
};
