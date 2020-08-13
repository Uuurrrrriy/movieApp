import React from 'react';
import './Jumbotron.scss'
import {SearchForm} from "../SearchForm/SearchForm";
import JumbotronImage from '../../assets/jumbotron_image.jpg'

export const Jumbotron = (props) => {
    const { path } = props;
    return (
            // <div className="jumbotron bg-image c-white">
            //     <div>
            //         <h1 className="display-4 text-lg-center font-weight-bold">
            //             Welcome to Movie for Elite
            //         </h1>
            //         <h2 className="lead text-lg-center font-weight-bolder">
            //             Full Movie Online For Free
            //         </h2>
            //         <div className="lead text-lg-center">
            //             <SearchForm/>
            //         </div>
            //     </div>
            // </div>
        <div className="jumbotron jumbotron-fluid bg-image c-white" style={{backgroundImage: `url(${JumbotronImage})`}}>
            {
              (  path === '/' || path === '/home' ) ? (
                   <div className="container">
                       <h1 className="display-4 text-lg-center font-weight-bold pb-2">
                           Welcome to Movie for Elite
                       </h1>
                       <h2 className="lead text-lg-center font-weight-bolder pb-3">
                           Full Movie Online For Free
                       </h2>
                       <div className="lead text-lg-center pb-2">
                           <SearchForm/>
                       </div>
                   </div>
               ) : ''
            }

        </div>
    );
};
