import React, {Component} from 'react';
import {accessToken} from "../../constants";
import {MovieCard} from "../../components/MovieCard";
import queryString from 'query-string';
import {Loading} from "../../components/Loading/Loading";
import {MoviePagination} from "../../components/MoviePagination/MoviePagination";
import './MovieList.scss'
import {Jumbotron} from "../../components/Jumbotron/Jumbotron";

const CN = 'movie-list';
export class MovieList extends Component {
    // const { moviesConfig: { movieList, isLoading: isMoviesLoading } } = props;
    // console.log(props);
    // useEffect(()=>{
    //     loadMovies();
    // },[]);
    componentDidMount() {
        const { location: { search } ,moviesConfig: { page } } = this.props;
        // console.log(page);

        const params = queryString.parse(search);
        const { page: pageFromUrl } = params;

        const pageNum = pageFromUrl ? pageFromUrl : page;

        this.loadMovies(pageNum);
    }

    loadMovies = (page) => {
      const { actions } = this.props;
      const {getMovies} = actions;
        // debugger
        // console.log(actions.getMovies());
        getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&page=${page}`);
    };

    updateUrl = (page) => {
        // апдейт урлы в адресной строке, меняем query search
        const { history } = this.props;
        const newParams = {
            page
        };
        history.replace({ search: queryString.stringify(newParams) });
    };

    setPage = (pageNum) => {
        // const { actions: { setPage } } = this.props;

        return () => {
            // const { usersConfig: { perPage } } = this.props;
            this.loadMovies(pageNum);
            this.updateUrl(pageNum);
        };
    };

    onSelectPost = (id) => {
        const { history, match: { url } } = this.props;

        // console.log(this.props);

        history.push(`${url}/${id}`);
    };

    render() {
        const { moviesConfig: { movieList, isLoading: isMoviesLoading, page, totalPages },
            portionSize = 10,
            match: {url} } = this.props;
            // debugger
        // console.log(this.props);
        return (
           <div>
               <Jumbotron path={url} />
               <div className={`${CN} pr-4 pl-4 pb-3 pt-2`}>
                   <h3>
                       Movie for Elite Films
                   </h3>
                   <div className={`pagination d-flex justify-content-center align-items-center ${isMoviesLoading ? 'disabled' : ''}`}>
                       <div className="pt-3">
                           <div className="pages">
                               <MoviePagination
                                   currentPage={page}
                                   pageCount={totalPages}
                                   portionSize={portionSize}
                                   onPageClick={this.setPage} />
                               {/*{*/}
                               {/*    (new Array(totalPages)).fill(1).map((item, index) => (*/}
                               {/*        <div>*/}
                               {/*            <div key={index} className={`pagination-item ${index + 1 === page ? 'active' : ''}`}*/}
                               {/*                 onClick={this.setPage(index + 1)}>{index + 1}</div>*/}
                               {/*        </div>*/}
                               {/*    ))*/}
                               {/*}*/}
                           </div>
                       </div>
                   </div>
                   <div className='pt-4'>
                       { isMoviesLoading && <Loading/> }

                       {
                           !isMoviesLoading && !movieList.length && (
                               <div>No movie founds</div>
                           )
                       }

                       {
                           !isMoviesLoading && !!movieList.length && (
                               <div className='row row-cols-1 row-cols-md-3'>
                                   {
                                       movieList.map(movie => (
                                           <div className='col mb-4' key={movie.id}>
                                               <MovieCard item={movie} onSelect={this.onSelectPost} />
                                           </div>
                                       ))
                                   }
                               </div>
                           )
                       }
                       {/*{*/}
                       {/*    movieList.map(movie => (*/}
                       {/*                    <div key={movie.id}>*/}
                       {/*                        {movie.title}*/}
                       {/*                    </div>*/}
                       {/*                ))*/}
                       {/*}*/}
                   </div>
               </div>
           </div>
        );
    }


};

