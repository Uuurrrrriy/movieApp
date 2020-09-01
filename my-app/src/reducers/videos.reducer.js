import {GET_VIDEOS, LOADING_VIDEOS_END, LOADING_VIDEOS_START} from "../actionTypes/videos.actionTypes";

let initialState = {
    videosList: [],
    isLoading: false,
    // page: 1,
    // totalPages: 0
};


export const videosReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_VIDEOS: {
            const { payload } = action;
            debugger
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_VIDEOS_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_VIDEOS_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
