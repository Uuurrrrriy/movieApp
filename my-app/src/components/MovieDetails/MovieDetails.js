import React, {Component} from 'react';
import {Jumbotron} from "../Jumbotron/Jumbotron";
import {accessToken} from "../../constants";
import {Loading} from "../Loading/Loading";
import './MovieDetails.scss'
import {IconsList} from "../IconsList/IconsList";
import queryString from "query-string";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import {Reviews} from "../Reviews/Reviews";
import {GoBackButton} from "../GoBackButton/GoBackButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {Trailers} from "../Trailers/Trailers";


export class MovieDetails extends Component {
    // static contextType = AppFooterIconsContext;

    componentDidMount() {
        const { location: { search } ,reviewsConfig: { page } } = this.props;

        const { id } = this.props;
        // console.log(id);

        const params = queryString.parse(search);

        const { page: pageFromUrl } = params;

        const pageNum = pageFromUrl ? pageFromUrl : page;

        this.loadVideos(id);
        this.loadReviews(id,pageNum);
        this.loadGenres()
    }


    loadGenres = () => {
        const {actions} = this.props;
        const {getGenres} = actions;

        // console.log(getGenres());

        getGenres(`https://api.themoviedb.org/3/genre/movie/list?api_key=${accessToken}`);
    };

    loadReviews = (id,page) => {
        const { actions } = this.props;
        const { getReviewsMovies } = actions;
        // console.log(actions);
        getReviewsMovies(id,page);
    };

    loadVideos = (id) => {
        const { actions } = this.props;
        const { getVideos } = actions;
        // console.log(actions);
        getVideos(id);
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
        const { id } = this.props;

        return () => {
            // const { usersConfig: { perPage } } = this.props;
            this.loadReviews(id,pageNum);
            this.updateUrl(pageNum);
        };
    };

    goBack = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        const { title, backdrop_path, overview, release_date, genre_ids } = this.props.item;
        // console.log(this.props.item);
        const {genresConfig: {genreList, isLoading: isGenresLoading},
            reviewsConfig: { reviewsList,  isLoading: isReviewsLoading, page, totalPages },
            videosConfig: { videosList, isLoading: isVideosLoading } ,
            portionSize = 10
        } = this.props;
        // const trailer = videosList.find( item => item.type === 'Trailer' );
        // console.log( this.props);
        // const { FooterIconsList } = this.context;
        // console.log( this.context );
        return (
            <div>
                <Jumbotron/>
                <div className='container d-flex pb-5'>
                    <div className='pr-3'>
                        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title}/>
                    </div>
                    <div>
                        <h2>
                            {
                                title
                            }
                        </h2>
                        <div className='d-flex pt-2 pb-3'>
                            <div className='pr-3'>
                                {release_date}
                            </div>
                            <div>
                                {isGenresLoading && <Loading/> }
                                {
                                    !isGenresLoading && !genreList.length && (
                                        <div>No genres founds</div>
                                    )
                                }
                                {
                                    !isGenresLoading
                                    && !!genreList.length
                                    && genre_ids.map(item => {
                                        // console.log(item);
                                            return ( genreList.map(genre => {
                                                // console.log(genre);
                                                    if (item === genre.id) {
                                                        // console.log(genre.name);
                                                        return (
                                                            <span key={item.id} className="badge badge-light">
                                                                {
                                                                    genre.name
                                                                }
                                                            </span>
                                                        )
                                                    }
                                            })
                                            )
                                    }
                                    )
                                }
                            </div>
                        </div>
                        <p className='pb-3'>
                            {
                                overview
                            }
                        </p>
                        <div className='mr-3 mb-4'>
                            {isVideosLoading && <Loading/>}
                            {/*{*/}
                            {/*    !isVideosLoading && !!videosList.length && (*/}
                            {/*        <div>*/}
                            {/*            <Trailers item={trailer} />*/}
                            {/*        </div>*/}
                            {/*    )*/}
                            {/*}*/}
                            {
                                !isVideosLoading && !!videosList.length && (
                                    <ButtonGroup aria-label="Basic example">
                                        {
                                            videosList.map( item => {
                                                if ( item.type === 'Trailer' ) {
                                                    return (
                                                        // <a key={item.id} href={`https://www.youtube.com/watch?v=${item.key}`}>
                                                        //     <Button className='mr-2' variant="secondary">
                                                        //         {
                                                        //             item.name
                                                        //         }
                                                        //     </Button>
                                                        // </a>
                                                        <Trailers key={item.id} trailer={item} />
                                                    )
                                                }
                                            } )
                                        }
                                </ButtonGroup>
                                )
                            }
                        </div>
                        <div className=' p-2 d-flex text-decoration-none'>
                            <IconsList/>
                        </div>
                    </div>
                </div>
                <GoBackButton goBack={this.goBack} />
                <div className='container d-flex'>
                    {
                        !!reviewsList.length ? (
                            <div className=' d-flex'>
                                <div className='mt-2'>
                                    <i className="fas fa-comment-alt black-text fa-lg mr-md-4 mr-1 fa-2x"> </i>
                                </div>
                                <div className='col-12'>
                                    <h3>
                                        Reviews
                                    </h3>
                                    <hr/>
                                    <div>
                                        {isReviewsLoading && <Loading/>}
                                        {
                                            !isReviewsLoading && !!reviewsList.length && (
                                                <div>
                                                    {
                                                        reviewsList.map(item => (
                                                            <div key={item.id}>
                                                                <Reviews review={item} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                        {
                                            totalPages > 1 ? (
                                                <div className={`pagination d-flex justify-content-center align-content-center ${isReviewsLoading ? 'disabled' : ''}`}>
                                                    <div className="pt-2 pb-4 ">
                                                        <div className="pages">
                                                            <MoviePagination
                                                                currentPage={page}
                                                                pageCount={totalPages}
                                                                portionSize={portionSize}
                                                                onPageClick={this.setPage}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
