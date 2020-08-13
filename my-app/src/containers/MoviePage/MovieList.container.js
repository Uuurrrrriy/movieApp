import {connect} from "react-redux";
import * as moviesActions from '../../actions/movies.action';
import {bindActionCreators} from "redux";

import { MovieList as MovieListComponent } from './MovieList';
import {withRouter} from "react-router";

const mapStateToProps = (state) => {
    const { movies } = state;
    return {
        moviesConfig: movies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...moviesActions
        }, dispatch)
    };
};

export const MovieList = withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieListComponent));
