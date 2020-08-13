import React from 'react';
import Card from 'react-bootstrap/Card'

export const PosterImage = (props) => {
    const {image} = props;
    return (
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${image}`}/>
        // <div className='image-wrapper'>
        //     <img src={`https://image.tmdb.org/t/p/w500/${image}`} className="card-img-top img'" alt={alt}/>
        // </div>
    );
};

