import {
    GET_SEARCH_MOVIES,
    LOADING_SEARCH_MOVIES_END,
    LOADING_SEARCH_MOVIES_START
} from "../actionTypes/moviesSearch.actionTypes";

let initialState = {
    movieSearchList: [],
    isLoading: false,
    page: 1,
    totalPages: 0
};


export const moviesSearchReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_SEARCH_MOVIES: {
            const { payload } = action;
            debugger
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_SEARCH_MOVIES_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_SEARCH_MOVIES_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
