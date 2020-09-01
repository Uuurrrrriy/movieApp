import React, {Component} from 'react';
import {accessToken} from "../../constants";
import {MovieCard} from "../../components/MovieCard";
import queryString from 'query-string';
import {Loading} from "../../components/Loading/Loading";
import {MoviePagination} from "../../components/MoviePagination/MoviePagination";
import './MovieList.scss'
import {Jumbotron} from "../../components/Jumbotron/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {AppSortingTypeContext} from "../../context";

const CN = 'movie-list';
export class MovieList extends Component {
    static contextType = AppSortingTypeContext;

    constructor(props) {
        super(props);
        this.state = {
            blockLoading:false,
            sortingTypeValue: ''
        }
    }
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
        // console.log(!!sortType);
        // debugger
        // console.log(actions.getMovies());
        getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&page=${page}`);
    };

    loadSortingMovies = (page,sortType) => {
        const { actions } = this.props;
        const { getSortingMovies } = actions;

        getSortingMovies(page,sortType)
    };

    updateUrl = (page,sortBy) => {
        // апдейт урлы в адресной строке, меняем query search
        const { history } = this.props;
        const newParams = {
            page,
            sortBy
        };
        history.replace({ search: queryString.stringify(newParams) });
    };

    updateSortUrl = (page,sortBy) => {
        const { history } = this.props;
        const newParams = {
            page,
            sortBy
        };
        history.replace({ search: queryString.stringify(newParams) });
    };

    setPage = (pageNum,SortType) => {
        // const { actions: { setPage } } = this.props;

        return () => {
            // const { usersConfig: { perPage } } = this.props;
            this.loadMovies(pageNum,SortType);
            this.updateUrl(pageNum,SortType);
        };
    };

    setSortPage = (pageNum,SortType) => {
        return () => {
            // const { usersConfig: { perPage } } = this.props;
            this.loadSortingMovies(pageNum,SortType);
            this.updateSortUrl(pageNum,SortType);
        };
    };

    onClickHandler = (sortBy) => {
        const { location: { search } ,moviesConfig: { page } } = this.props;
        // console.log(page);

        const params = queryString.parse(search);
        const { page: pageFromUrl } = params;

        const pageNum = pageFromUrl ? pageFromUrl : page;

        // let sortingValues = this.context.map( item => {
        //     return item.sortBy
        // } );
        // console.log(sortingValues);

        this.setState({
            blockLoading: true
        });

        this.setState({
            sortingTypeValue: sortBy
        });

        // for (let i = 0; i < sortingValues.length; i++) {
        //     for (let j = 0; j < sortBy.length; j++) {
        //         console.log(sortingValues[i]);
        //         if(sortBy === sortingValues[i]) {
        //             this.loadSortingMovies(pageNum,sortingValues[i]);
        //             this.setSortPage(pageNum,sortingValues[i])
        //         }
        //     }
        // }
        this.loadSortingMovies(pageNum,sortBy);

        this.setSortPage(pageNum,sortBy)
    };

    onSelectPost = (id,sortBy) => {
        const { history, match: { url } } = this.props;

        // console.log(this.props);

        history.push(`${url}/${id}${ !!sortBy ? `&sort_by=${sortBy}` : '' }`);
    };

    render() {
        const { moviesConfig: { movieList, isLoading: isMoviesLoading, page, totalPages },
            moviesSortingConfig: { movieSortingList, isLoading: isSortingMoviesLoading, page: sortPage, totalPages: sortTotalPages },
            portionSize = 10,
            match: {url, params: { id }}} = this.props;
            // debugger
        // console.log(this.props);
        // const { AppSortingTypeContext } = this.context;
        // console.log(this.context);
        return (
            <AppSortingTypeContext.Consumer>
                {
                    SortingTypes => {
                        return (
                            <div>
                                <Jumbotron path={url} />
                                <div className={`${CN} pr-4 pl-4 pb-3 pt-2`}>
                                    <h3>
                                        Movie for Elite Films
                                    </h3>
                                   <div className='d-flex pt-3'>
                                       <h4 className=' pt-3 pb-4 pl-3 pr-5 mr-2'>
                                           Sort Movies By:
                                       </h4>
                                       <div className='d-flex justify-content-center align-content-center pt-3 pb-4'>
                                           {/*<ButtonGroup aria-label="Basic example">*/}
                                           {
                                               !!SortingTypes.length && SortingTypes.map( sortType => (
                                                   <ButtonGroup key={sortType.id} className="mr-1" aria-label="Basic example">
                                                       <Button
                                                           key={sortType.id}
                                                           onClick={ () => {
                                                               this.onClickHandler(sortType.sortBy)
                                                           } }
                                                           variant="primary">
                                                           {
                                                               sortType.label
                                                           }
                                                       </Button>
                                                   </ButtonGroup>

                                               ) )
                                           }
                                           {/*<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">*/}
                                           {/*    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>*/}
                                           {/*    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>*/}
                                           {/*</DropdownButton>*/}
                                           {/*<Button variant="secondary">Popularity</Button>*/}
                                           {/*<Button variant="secondary">Release date</Button>*/}
                                           {/*<Button variant="secondary" onClick={this.onClickHandler} >Revenue</Button>*/}
                                           {/*</ButtonGroup>*/}
                                       </div>
                                   </div>
                                    {
                                        !!this.state.blockLoading ? (
                                            <div>
                                                <div className={`pagination d-flex justify-content-center align-items-center ${isSortingMoviesLoading ? 'disabled' : ''}`}>
                                                    <div className="pt-3">
                                                        <div className="pages">
                                                            <MoviePagination
                                                                load={this.state.blockLoading}
                                                                currentPage={sortPage}
                                                                pageCount={sortTotalPages}
                                                                portionSize={portionSize}
                                                                sortBy={this.state.sortingTypeValue}
                                                                onSortPageClick={this.setSortPage} />
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
                                                    { isSortingMoviesLoading && <Loading/> }

                                                    {
                                                        !isSortingMoviesLoading && !movieSortingList.length && (
                                                            <div>No movie founds</div>
                                                        )
                                                    }

                                                    {
                                                        !isSortingMoviesLoading && !!movieSortingList.length && (
                                                            <div className='row row-cols-1 row-cols-md-3'>
                                                                {
                                                                    movieSortingList.map(movie => (
                                                                        <div className='col mb-4' key={movie.id}>
                                                                            <MovieCard id={id} item={movie} onSelect={this.onSelectPost} />
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
                                        ) : (
                                            <div>
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
                                                                            <MovieCard id={id} item={movie} onSelect={this.onSelectPost} />
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
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </AppSortingTypeContext.Consumer>
        );
    }


};

