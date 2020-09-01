import {GET_REVIEWS, LOADING_REVIEWS_END, LOADING_REVIEWS_START} from "../actionTypes/reviews.actionTypes";

let initialState = {
    reviewsList: [],
    isLoading: false,
    page: 1,
    totalPages: 0
};


export const moviesReviewsReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_REVIEWS: {
            const { payload } = action;
            debugger
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_REVIEWS_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_REVIEWS_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
