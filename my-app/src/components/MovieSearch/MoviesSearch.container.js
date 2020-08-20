import {connect} from "react-redux";
import * as moviesSearchActions from '../../actions/moviesSearch.action';
import * as moviesActions from '../../actions/movies.action';
import {bindActionCreators} from "redux";

import { MoviesSearch as MoviesSearchComponent } from './MoviesSearch';
import {withRouter} from "react-router";

const mapStateToProps = (state) => {
    const {
        moviesSearch,
        movies
    } = state;
    return {
        moviesSearchConfig: moviesSearch,
        moviesConfig: movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...moviesSearchActions,
            ...moviesActions
        }, dispatch)
    };
};

export const MoviesSearch = withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesSearchComponent));
