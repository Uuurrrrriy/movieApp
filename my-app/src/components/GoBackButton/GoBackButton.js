import React from 'react';
import './GoBackButton.scss'

export const GoBackButton = (props) => {
    const { goBack } = props;
    return (
        <div className='d-flex justify-content-center align-content-center pb-5' onClick={goBack}>
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
    );
};
