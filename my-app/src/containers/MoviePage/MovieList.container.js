import {connect} from "react-redux";
import * as moviesActions from '../../actions/movies.action';
import * as moviesSortingActions from '../../actions/moviesSorting.action';
import {bindActionCreators} from "redux";

import { MovieList as MovieListComponent } from './MovieList';
import {withRouter} from "react-router";

const mapStateToProps = (state) => {
    const { movies, moviesSort } = state;
    return {
        moviesConfig: movies,
        moviesSortingConfig: moviesSort
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...moviesActions,
            ...moviesSortingActions
        }, dispatch)
    };
};

export const MovieList = withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieListComponent));
