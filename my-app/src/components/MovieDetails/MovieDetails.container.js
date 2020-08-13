import {connect} from "react-redux";
import * as genresActions from '../../actions/genres.action';
import {bindActionCreators} from "redux";

import { MovieDetails as MovieDetailsComponent } from './MovieDetails';
import {withRouter} from "react-router";

const mapStateToProps = (state) => {
    const { genres } = state;
    return {
        genresConfig: genres,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...genresActions
        }, dispatch)
    };
};

export const MovieDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComponent));
