import React from 'react';

export const Reviews = (props) => {
    const { author, content } = props.review;
    return (
        <div>
            <div  className='d-flex'>
                <div className='font-weight-bold pr-1'>
                    Reviewer:
                </div>
                <div>
                    { author }
                </div>
            </div>
            <div className='d-flex'>
                <div className='font-weight-bolder pr-1'>
                    Review:
                </div>
                <div>
                    {
                        content
                    }
                </div>
            </div>
            <hr className='hr-dark'/>
        </div>
    );
};
