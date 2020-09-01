import {connect} from "react-redux";
import * as genresActions from '../../actions/genres.action';
import * as reviewsActions from '../../actions/reviews.action';
import * as videosActions from '../../actions/videos.action';
import {bindActionCreators} from "redux";

import { MovieDetails as MovieDetailsComponent } from './MovieDetails';
import {withRouter} from "react-router";

const mapStateToProps = (state) => {
    const { genres, reviews, videos } = state;
    return {
        genresConfig: genres,
        reviewsConfig: reviews,
        videosConfig: videos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...genresActions,
            ...reviewsActions,
            ...videosActions
        }, dispatch)
    };
};

export const MovieDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComponent));
