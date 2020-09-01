import React, {Component} from 'react';
import {Loading} from "../Loading/Loading";
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";
import {MovieDetails} from "../MovieDetails";

export class MovieSearchDetailsPage extends Component {
    componentDidMount() {
        this.loadSearchMovies();
    }

    loadSearchMovies = () => {
        const { actions,  match: { params: { id } }  } = this.props;
        const {getSearchMovies} = actions;
        // debugger
        // console.log(actions.getMovies());
        getSearchMovies(id,'');
        // getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&page=${id}`);
    };

    goBack = () => {
        const { history } = this.props;
        history.goBack();
    };
    //
    // console.log(props);
    // const movie = !isMoviesLoading && !!movieList.length && movieList.find(item => item.id === id);
    // console.log(movie);
    //
    render() {
        const { moviesSearchConfig: { movieSearchList, isLoading: isSearchMoviesLoading }, match: { params: { id } }, history } = this.props;
        const movie = movieSearchList.find(item => item.id === +id);
        console.log(movie);
        // if (!movie) return history.push('/not-found');
        return (
            <div>
                {/*<div className='back-btn' onClick={this.goBack}>{'<'} Back</div>*/}

                {
                    !movie ? history.push('/not-found') : ""
                }

                { isSearchMoviesLoading && <Loading/> }

                {
                    !isSearchMoviesLoading && !movieSearchList.length && (
                        <div>No movie found </div>
                    )
                }

                {
                    !isSearchMoviesLoading && !!movieSearchList.length && (
                        <ErrorBoundary>
                            <MovieDetails id={id} item={movie}/>
                        </ErrorBoundary>
                        // <div>
                        //     {
                        //         movieList.map( item => {
                        //             console.log(item);
                        //             console.log( id , item.id );
                        //             if (item.id === +id) {
                        //                 return (
                        //                     <ErrorBoundary>
                        //                         <MovieDetails item={item}/>
                        //                     </ErrorBoundary>
                        //                 )
                        //             }
                        //
                        //         } )
                        //     }
                        // </div>
                    )
                }


                {/*/!*<MovieDetails item={movie}/>*!/*/}
                {/*/!*{post && <Post post={post}/>}*!/*/}
                {/*/!*{!post && <div> No post found For current id {id}</div>}*!/*/}
            </div>
        );
    }
}

