import {GET_MOVIES, LOADING_MOVIES_END, LOADING_MOVIES_START} from "../actionTypes/movie.actionTypes";

let initialState = {
    movieList: [],
    isLoading: false,
    page: 1,
    totalPages: 0
};


export const moviesReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_MOVIES: {
            const { payload } = action;
            debugger
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_MOVIES_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_MOVIES_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
