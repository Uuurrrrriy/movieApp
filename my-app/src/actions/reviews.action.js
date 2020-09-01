import { batch } from 'react-redux'
import {accessToken} from "../constants";
import {
    GET_REVIEWS,
    GET_REVIEWS_ERROR,
    LOADING_REVIEWS_END,
    LOADING_REVIEWS_START
} from "../actionTypes/reviews.actionTypes";

export const getReviewsSuccess = (reviews) => ({ type: GET_REVIEWS, payload: reviews });
export const getReviewsError = (error) => ({ type: GET_REVIEWS_ERROR, payload: error });
export const startReviewsLoading = () => ({ type: LOADING_REVIEWS_START });
export const endReviewsLoading = () => ({ type: LOADING_REVIEWS_END });

export const getReviewsMovies = (id,page) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${accessToken}&page=${page}`;
    return (dispatch) => {
        dispatch(startReviewsLoading());
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
                    dispatch(endReviewsLoading());
                    // dispatch(getMoviesSuccess(data.results));
                    dispatch(getReviewsSuccess({
                        reviewsList: data.results,
                        page: data.page,
                        totalPages: data.total_pages
                    }));
                } )
            } )
            .catch(error => {
                batch ( () => {
                    dispatch(endReviewsLoading());
                    dispatch(getReviewsError(error))
                })
            })
    }
};
