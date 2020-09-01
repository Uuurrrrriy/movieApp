import { connect } from 'react-redux';
// import { withRouter} from 'react-router';
import { MovieDetailsPage as MovieDetailsPageComponent } from './MovieDetailsPage';
import {bindActionCreators} from "redux";
import * as moviesActions from "../../actions/movies.action";
import * as moviesSortingActions from '../../actions/moviesSorting.action';

const mapStateToProps = (state) => {
    debugger
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

export const MovieDetailsPage = connect(mapStateToProps,mapDispatchToProps)(MovieDetailsPageComponent);
