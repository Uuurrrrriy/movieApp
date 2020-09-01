import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import {AppLinksContext} from "../../context";
import LogoImage from "../../assets/logo.png"
import './Header.scss'


const CN = 'header';
export const Header = (props) => {
    const links = useContext(AppLinksContext);
    // console.log(links);
    return (
       <div className={`${CN}`}>
               <div className='d-flex justify-content-sm-between  align-content-center bg-cl'>
                   <div>
                       <img className='logo' src={LogoImage} alt="logo"/>
                   </div>
                   <ul>
                       {/*<li><a href="#">home</a></li>*/}
                       {/*<li><a href="#">archives</a></li>*/}
                       {/*<li><a href="#">tags</a></li>*/}
                       {/*<li><a href="#">categories</a></li>*/}
                       {/*<li><a href="#">about</a></li>*/}
                       {
                           !!links.length && links.map( link => (
                               <li key={link.id}>
                                   <NavLink
                                       to={link.to}
                                       activeClassName='active-link'>
                                       {link.label}
                                   </NavLink>
                               </li>
                           ) )
                       }
                   </ul>
               </div>
       </div>
    );
};

