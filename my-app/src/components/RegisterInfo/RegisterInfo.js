import React from 'react';
import './RegisterInfo.scss'
import register_info from "../../assets/register_info.jpg";
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

const CN = 'register-info';
export const RegisterInfo = (props) => {
    return (
        <div className={`${CN}__reg-info-container`} style={{backgroundImage: `url(${register_info})`}}>
            <div className='container'>
               <div className={`${CN} padding-6 d-flex justify-content-center`}>
                   <div className={`${CN}__space col-4`}>
                       <h2 className={`${CN}__h2-decoration`}>
                           Get an account today
                       </h2>
                       <div className={`${CN}__main-info-decoration mt-4 mb-5`}>
                           Access free content on all of your devices, sync your list and continue watching anywhere.
                       </div>
                       <div className={`${CN } link d-flex justify-content-center pb-5`}>
                           <Link to='/register'>
                               <Button  className='btn-styled pl-5 pr-5'
                                        label='Register Free'
                               />
                           </Link>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
};
