import {GET_GENRES, LOADING_GENRES_END, LOADING_GENRES_START} from "../actionTypes/genre.actionTypes";

let initialState = {
    genreList: [],
    isLoading: false
};


export const genresReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_GENRES: {
            const { payload } = action;
            debugger
            return {
                ...state,
                genreList: payload
            }
        }
        case LOADING_GENRES_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_GENRES_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
