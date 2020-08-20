import React from 'react';
import Card from 'react-bootstrap/Card'

export const PosterImage = (props) => {
    const {image, alt } = props;
    return (
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${image}`} alt={alt}/>
        // <div className='image-wrapper'>
        //     <img src={`https://image.tmdb.org/t/p/w500/${image}`} className="card-img-top img'" alt={alt}/>
        // </div>
    );
};

