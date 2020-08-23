import {
    GET_SORT_MOVIES,
    LOADING_SORT_MOVIES_END,
    LOADING_SORT_MOVIES_START
} from "../actionTypes/moviesSorting.actionTypes";

let initialState = {
    movieSortingList: [],
    isLoading: false,
    page: 1,
    totalPages: 0
};


export const moviesSortingReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_SORT_MOVIES: {
            const { payload } = action;
            debugger
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_SORT_MOVIES_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_SORT_MOVIES_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
