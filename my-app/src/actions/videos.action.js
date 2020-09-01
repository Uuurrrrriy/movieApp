import { batch } from 'react-redux'
import {accessToken} from "../constants";
import {
    GET_VIDEOS,
    GET_VIDEOS_ERROR,
    LOADING_VIDEOS_END,
    LOADING_VIDEOS_START
} from "../actionTypes/videos.actionTypes";

export const getVideosSuccess = (videos) => ({ type: GET_VIDEOS, payload: videos });
export const getVideosError = (error) => ({ type: GET_VIDEOS_ERROR, payload: error });
export const startVideosLoading = () => ({ type: LOADING_VIDEOS_START });
export const endVideosLoading = () => ({ type: LOADING_VIDEOS_END });

export const getVideos = (id) => {
    // const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${accessToken}&page=${page}`;
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${accessToken}&language=en-US`;
    return (dispatch) => {
        dispatch(startVideosLoading());
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
                    dispatch(endVideosLoading());
                    // dispatch(getMoviesSuccess(data.results));
                    dispatch(getVideosSuccess({
                        videosList: data.results,
                        // page: data.page,
                        // totalPages: data.total_pages
                    }));
                } )
            } )
            .catch(error => {
                batch ( () => {
                    dispatch(endVideosLoading());
                    dispatch(getVideosError(error))
                })
            })
    }
};
