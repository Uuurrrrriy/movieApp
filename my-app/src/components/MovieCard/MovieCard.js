import React, { Component } from 'react';
import { PosterImage } from "../PosterImage/PosterImage";
import Card from "react-bootstrap/Card";
import { accessToken } from "../../constants";
import { Loading } from "../Loading/Loading";

const example = {
        "popularity": 211.123,
        "vote_count": 2692,
        "video": false,
        "poster_path": "/mb7wQv0adK3kjOUr9n93mANHhPJ.jpg",
        "id": 583083,
        "adult": false,
        "backdrop_path": "/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg",
        "original_language": "en",
        "original_title": "The Kissing Booth 2",
        "genre_ids": [
            35,
            10749
        ],
        "title": "The Kissing Booth 2",
        "vote_average": 8.2,
        "overview": "With college decisions looming, Elle juggles her long-distance romance with Noah, changing relationship with bestie Lee and feelings for a new classmate.",
        "release_date": "2020-07-24"
    };

const CN = 'movie-card';
export class MovieCard extends Component {

    // console.log(genre_ids);

    // console.log(genresConfig);
    // useEffect(() => {
    //     loadGenres();
    // },[]);

    componentDidMount() {
        this.loadGenres()
    }

    loadGenres = () => {
        const {actions} = this.props;
        const {getGenres} = actions;

        // console.log(getGenres());

        getGenres(`https://api.themoviedb.org/3/genre/movie/list?api_key=${accessToken}`);
    };

    onSelectHandler = () => {
        const {onSelect, item: {id}, sortBy} = this.props;

        onSelect && onSelect(id,sortBy)
    };

    render() {
        const {title, vote_average, overview, release_date, poster_path, genre_ids} = this.props.item;
        // console.log(this.props.item);
        const {genresConfig: {genreList, isLoading: isGenresLoading}} = this.props;
        // debugger

        return (
            <div className={`${CN} h-100 card`} onClick={this.onSelectHandler}>
                <PosterImage image={poster_path} alt={title} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <div>
                        <div className={`row`}>
                            <div className={`d-flex col-3 metadata pb-3`}>
                                <i className='fas fa-star pt-1'> </i>
                                <div className='pl-1'>{vote_average}/10</div>
                            </div>
                            {/*<div className="col-8 metadata">Adventure. Sci-Fi</div>*/}
                            <div className="col-3 d-flex pt-1">
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
                                                            //     <div>
                                                            //         {
                                                            //             genre.name
                                                            //         }
                                                            //     </div>
                                                            )
                                                        }
                                                    })
                                                )

                                        }
                                )
                            }
                        </div>
                        </div>
                    </div>
                    <Card.Text>
                        {
                            overview
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        {release_date}
                    </small>
                </Card.Footer>
            </div>
        )
    }

}

        // <div className="card">
        //         <PosterImage image={poster_path} alt={title} />
        //         <div className="card-body">
        //             <h5 className="card-title">
        //                 {title}
        //             </h5>
        //             <div className="row">
        //                 <div className="col-4 metadata">
        //                     <i className="fa fa-star" aria-hidden="true"> </i>
        //                     <p>
        //                         {vote_average}/10
        //                     </p>
        //                 </div>
        //             </div>
        //             <p className="card-text">
        //                 {overview}
        //             </p>
        //         </div>
        //         <div className="card-footer">
        //             <small className="text-muted">
        //                 {release_date}
        //             </small>
        //         </div>
        // </div>
