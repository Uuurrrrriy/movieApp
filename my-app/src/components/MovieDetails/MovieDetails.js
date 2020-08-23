import React, {Component} from 'react';
import {Jumbotron} from "../Jumbotron/Jumbotron";
import {accessToken} from "../../constants";
import {Loading} from "../Loading/Loading";
// import {AppFooterIconsContext} from "../../context";
// import {NavLink} from "react-router-dom";
import './MovieDetails.scss'
import {IconsList} from "../IconsList/IconsList";


export class MovieDetails extends Component {
    // static contextType = AppFooterIconsContext;

    componentDidMount() {
        this.loadGenres()
    }


    loadGenres = () => {
        const {actions} = this.props;
        const {getGenres} = actions;

        // console.log(getGenres());

        getGenres(`https://api.themoviedb.org/3/genre/movie/list?api_key=${accessToken}`);
    };

    goBack = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        const { title, backdrop_path, overview, release_date, genre_ids } = this.props.item;
        console.log(this.props.item);
        const {genresConfig: {genreList, isLoading: isGenresLoading}} = this.props;
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
                                                            <span className="badge badge-light">
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
                        <div className=' p-2 d-flex text-decoration-none'>
                            <IconsList/>
                        </div>
                    </div>
                </div>
                <div className='container d-flex'>
                    <div className='pr-1 mt-2'>
                        <i className="fas fa-comment-alt black-text fa-lg mr-md-4 mr-1 fa-3x"> </i>
                    </div>
                   <div className='col-12'>
                       <h1>
                           Reviews
                       </h1>
                       <hr/>
                   </div>
                </div>
                <div className='d-flex justify-content-center align-content-center pb-5' onClick={this.goBack}>
                    <div className='button-container'>
                        <div className="button">
                            <a href="#">
                                <span className="shift mr-2">&#8249;</span>
                                GO&nbsp;BACK&nbsp;
                            </a>
                            <div className="mask"> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
