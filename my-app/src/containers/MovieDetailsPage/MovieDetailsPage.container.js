import { connect } from 'react-redux';
// import { withRouter} from 'react-router';
import { MovieDetailsPage as MovieDetailsPageComponent } from './MovieDetailsPage';
import {bindActionCreators} from "redux";
import * as moviesActions from "../../actions/movies.action";

const mapStateToProps = (state) => {
    debugger
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

export const MovieDetailsPage = connect(mapStateToProps,mapDispatchToProps)(MovieDetailsPageComponent);
