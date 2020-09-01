import React, {Component} from 'react';
import {MovieDetails} from "../../components/MovieDetails";
import {ErrorBoundary} from "../../components/ErrorBoundary/ErrorBoundary";
import {accessToken} from "../../constants";
import {Loading} from "../../components/Loading/Loading";

export class MovieDetailsPage extends Component{
    // console.log(props);
    // let { id } = useParams();
    // console.log(id);
    // let history = useHistory();
    // let { id } = useParams();
    // let history = useHistory();
    // const { moviesConfig: { movieList, isLoading: isMoviesLoading } } = props;
    // console.log( props );
    //
    // useEffect( ()=>{
    //     loadMovies();
    // },[] );
    //

    componentDidMount() {
        this.loadMovies();
        this.loadSortingMovies();
    }

    loadMovies = () => {
        const { actions,  match: { params: { id } }  } = this.props;
        const {getMovies} = actions;
        // debugger
        // console.log(actions.getMovies());
        getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&page=${id}`);
    };

    loadSortingMovies = () => {
        const { actions, match: { params: { id, sortBy } } } = this.props;
        const { getSortingMovies } = actions;
        // console.log(id,sortBy);

        getSortingMovies(id,sortBy)
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
       const { moviesConfig: { movieList, isLoading: isMoviesLoading },
           match: { params: { id } },
           history,
           moviesSortingConfig: { movieSortingList, isLoading: isSortingMoviesLoading }
       } = this.props;
       const movie = movieList.find(item => item.id === +id);
       const sortMovie = movieSortingList.find(item => item.id === +id);
       // console.log(movie);
       //        // console.log(!!movie);
       //        // console.log(sortMovie);
       // if (!movie) return history.push('/not-found');
       return (
           <div>
               {/*<div className='back-btn' onClick={this.goBack}>{'<'} Back</div>*/}
               {
                   !sortMovie ? (
                       <div>
                           {
                               !movie ? history.push('/not-found') : ""
                           }

                           { isMoviesLoading && <Loading/> }

                           {
                               !isMoviesLoading && !movieList.length && (
                                   <div>No movie found </div>
                               )
                           }

                           {
                               !isMoviesLoading && !!movieList.length && (
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
                       </div>
                   ) : (
                       <div>
                           {
                               !sortMovie ? history.push('/not-found') : ""
                           }

                           { isSortingMoviesLoading && <Loading/> }

                           {
                               !isSortingMoviesLoading && !movieSortingList.length && (
                                   <div>No movie found </div>
                               )
                           }

                           {
                               !isSortingMoviesLoading && !!movieSortingList.length && (
                                   <ErrorBoundary>
                                       <MovieDetails id={id} item={sortMovie}/>
                                   </ErrorBoundary>
                               )
                           }
                       </div>
                   )
               }
               {/*{*/}
               {/*    !movie ? history.push('/not-found') : ""*/}
               {/*}*/}

               {/*{ isMoviesLoading && <Loading/> }*/}

               {/*{*/}
               {/*    !isMoviesLoading && !movieList.length && (*/}
               {/*        <div>No movie found </div>*/}
               {/*    )*/}
               {/*}*/}

               {/*{*/}
               {/*    !isMoviesLoading && !!movieList.length && (*/}
               {/*        <ErrorBoundary>*/}
               {/*            <MovieDetails id={id} item={movie}/>*/}
               {/*        </ErrorBoundary>*/}
               {/*        // <div>*/}
               {/*        //     {*/}
               {/*        //         movieList.map( item => {*/}
               {/*        //             console.log(item);*/}
               {/*        //             console.log( id , item.id );*/}
               {/*        //             if (item.id === +id) {*/}
               {/*        //                 return (*/}
               {/*        //                     <ErrorBoundary>*/}
               {/*        //                         <MovieDetails item={item}/>*/}
               {/*        //                     </ErrorBoundary>*/}
               {/*        //                 )*/}
               {/*        //             }*/}
               {/*        //*/}
               {/*        //         } )*/}
               {/*        //     }*/}
               {/*        // </div>*/}
               {/*    )*/}
               {/*}*/}


               {/*/!*<MovieDetails item={movie}/>*!/*/}
               {/*/!*{post && <Post post={post}/>}*!/*/}
               {/*/!*{!post && <div> No post found For current id {id}</div>}*!/*/}
           </div>
       );
   }
}

