import {connect} from "react-redux";
import * as genresActions from '../../actions/genres.action';
import {bindActionCreators} from "redux";

import { MovieCard as MovieCardComponent } from './MovieCard';
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

export const MovieCard = withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCardComponent));
