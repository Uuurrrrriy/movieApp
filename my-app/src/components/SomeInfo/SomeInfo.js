import React from 'react';
import './SomeInfo.scss'
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";

const CN = 'some-info';
export function SomeInfo(props) {
    return (
        <div className={`${CN}__bg-main-img container `}>
            <div className='p-4 mr-auto ml-auto'>
                <div className={`${CN}__header-info d-flex justify-content-center col-12 pb-3`}>
                    <h2>
                        Thousands of titles
                    </h2>
                </div>
                <div className={`${CN}__main-info pb-4`}>
                    <div className='pb-2'>
                        Watch amazing movies and TV shows for free. No subscription fees, and no credit cards.
                        Just thousands of hours of streaming video content from studios like Paramount, Lionsgate, MGM and more.
                    </div>
                    <div className={`${CN}__footer-info`}>
                        With content from over 200 partners.
                    </div>
                </div>
                <div className={`${CN } link d-flex justify-content-center pb-5`}>
                   <Link to='/films'>
                       <Button  className='btn-styled pl-5 pr-5'
                                label='Browse Titles'
                       />
                   </Link>
                </div>
                <div className={`${CN}__bg-helpful-img `}>
                </div>
            </div>
        </div>
    );
}
