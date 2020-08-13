import { batch } from 'react-redux'
import {GET_MOVIES, GET_MOVIES_ERROR, LOADING_MOVIES_END, LOADING_MOVIES_START} from "../actionTypes/movie.actionTypes";

export const getMoviesSuccess = (movies) => ({ type: GET_MOVIES, payload: movies });
export const getMoviesError = (error) => ({ type: GET_MOVIES_ERROR, payload: error });
export const startLoading = () => ({ type: LOADING_MOVIES_START });
export const endLoading = () => ({ type: LOADING_MOVIES_END });

export const getMovies = (url) => {
    return (dispatch) => {
        dispatch(startLoading());
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
                    dispatch(endLoading());
                    // dispatch(getMoviesSuccess(data.results));
                    dispatch(getMoviesSuccess({
                        movieList: data.results,
                        page: data.page,
                        totalPages: data.total_pages
                    }));
                } )
            } )
            .catch(error => {
                batch ( () => {
                    dispatch(endLoading());
                    dispatch(getMoviesError(error))
                })
            })
    }
};
