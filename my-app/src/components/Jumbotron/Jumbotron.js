import React from 'react';
import './Jumbotron.scss'
import JumbotronImage from '../../assets/jumbotron_image.jpg'
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

export const Jumbotron = (props) => {
    const { path } = props;
    console.log( path );

    const renderJumbotron = () => {
        switch (path) {
            case '/' && '/home' : {
                return (
                    <div className="container">
                        <h1 className="display-4 text-lg-center font-weight-bold pt-4 pb-2">
                            Welcome to Movie for Elite
                        </h1>
                        <h2 className="lead text-lg-center font-weight-bolder pb-3">
                            Full Movie Online For Free
                        </h2>
                        {/*<div className="lead text-lg-center pb-2">*/}
                        {/*    <SearchForm/>*/}
                        {/*</div>*/}
                    </div>
                )
            }
            case '/films': {
                return (
                    <div className='container'>
                        <h1 className="display-4 text-lg-center font-weight-bold pt-2 pb-2">
                            Search movies on Movie for Elite
                        </h1>
                        <h2 className="lead text-lg-center font-weight-bolder pb-3">
                            Full Movie Online For Free
                        </h2>
                        <div className="lead text-lg-center pb-2">
                            <div className={`link d-flex justify-content-center pb-5`}>
                                <Link to='/search'>
                                    <Button  className='btn-styled pl-5 pr-5'
                                             label='Search movies'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
            case '/search' : {
                return (
                    <div className="container">
                        <h1 className="display-4 text-lg-center font-weight-bold pt-4 pb-2">
                           Find all movies that you want
                        </h1>
                        <h2 className="lead text-lg-center font-weight-bolder pb-3">
                            Full Movie Online For Free
                        </h2>
                        {/*<div className="lead text-lg-center pb-2">*/}
                        {/*    <SearchForm/>*/}
                        {/*</div>*/}
                    </div>
                )
            }
            default :
                return ;
        }
    };

    return (
        <div className="jumbotron jumbotron-fluid bg-image c-white" style={{backgroundImage: `url(${JumbotronImage})`}}>
            {
                renderJumbotron()
            }
        </div>
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
        // <div className="jumbotron jumbotron-fluid bg-image c-white" style={{backgroundImage: `url(${JumbotronImage})`}}>
        //     {
        //       (  path === '/' || path === '/home' ) ? (
        //            <div className="container">
        //                <h1 className="display-4 text-lg-center font-weight-bold pt-4 pb-2">
        //                    Welcome to Movie for Elite
        //                </h1>
        //                <h2 className="lead text-lg-center font-weight-bolder pb-3">
        //                    Full Movie Online For Free
        //                </h2>
        //                {/*<div className="lead text-lg-center pb-2">*/}
        //                {/*    <SearchForm/>*/}
        //                {/*</div>*/}
        //            </div>
        //        ) : ''
        //     }
        //     {
        //         path === '/films' ? (
        //             <div className='container'>
        //                 <div className="lead text-lg-center pb-2">
        //                     <SearchForm/>
        //                 </div>
        //             </div>
        //     ) : ''
        //     }
        //
        // </div>
    );
};
