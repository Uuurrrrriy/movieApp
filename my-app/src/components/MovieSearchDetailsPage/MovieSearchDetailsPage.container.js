import { connect } from 'react-redux';
// import { withRouter} from 'react-router';
import { MovieSearchDetailsPage as MovieSearchDetailsPageComponent } from './MovieSearchDetailsPage';
import {bindActionCreators} from "redux";
import * as moviesSearchActions from "../../actions/moviesSearch.action";

const mapStateToProps = (state) => {
    debugger
    const { moviesSearch } = state;
    return {
        moviesSearchConfig: moviesSearch
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...moviesSearchActions
        }, dispatch)
    };
};

export const MovieSearchDetailsPage = connect(mapStateToProps,mapDispatchToProps)(MovieSearchDetailsPageComponent);
