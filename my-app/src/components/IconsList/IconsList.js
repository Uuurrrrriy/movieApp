import React, {useContext} from 'react';
import {AppFooterIconsContext} from "../../context";
import './IconsList.scss'

export const IconsList = (props) => {
    const iconsList = useContext(AppFooterIconsContext);
    return (
        <div>
            <div className=' p-2 d-flex text-decoration-none'>
                {
                    !!iconsList.length && iconsList.map( footerIcon => (
                        <a className='text-decoration-none c-black' key={footerIcon.id} href='#'>
                            <i className={`fab ${footerIcon.icon} black-text fa-lg mr-md-5 mr-3 fa-2x`}>
                            </i>
                        </a>
                    ) )
                }
            </div>
        </div>
    );
};
