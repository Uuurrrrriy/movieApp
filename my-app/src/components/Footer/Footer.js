import React, {useContext} from 'react';
import "./Footer.scss"
import {AppFooterIconsContext, AppLinksContext} from "../../context";
import {NavLink} from "react-router-dom";

const CN = 'footer';
export function Footer(props) {
    const footerLinks = useContext(AppLinksContext);
    const footerIcons = useContext(AppFooterIconsContext);
    return (
            <div className={`${CN}__footer-bg`}>
                <footer className="page-footer  font-small ">
                    <div className="container">
                        <div className={`${CN} row text-center d-flex justify-content-center pt-5 mb-3`}>
                            {
                                !!footerLinks.length && footerLinks.map( footerLink => (
                                    <div key={footerLink.id} className=" col-md-2 mb-3">
                                        <h6 className=" text-uppercase font-weight-bold">
                                            <NavLink
                                                className={`${CN}__col-white footer-head`}
                                                to={footerLink.to}
                                            >
                                                {footerLink.label}
                                            </NavLink>
                                            {/*<a href="#!">About us</a>*/}
                                        </h6>
                                    </div>
                                ) )
                            }

                            {/*<div className="col-md-2 mb-3">*/}
                            {/*    <h6 className="text-uppercase font-weight-bold">*/}
                            {/*        <a href="#!">Products</a>*/}
                            {/*    </h6>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-2 mb-3">*/}
                            {/*    <h6 className="text-uppercase font-weight-bold">*/}
                            {/*        <a href="#!">Awards</a>*/}
                            {/*    </h6>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-2 mb-3">*/}
                            {/*    <h6 className="text-uppercase font-weight-bold">*/}
                            {/*        <a href="#!">Help</a>*/}
                            {/*    </h6>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-2 mb-3">*/}
                            {/*    <h6 className="text-uppercase font-weight-bold">*/}
                            {/*        <a href="#!">Contact</a>*/}
                            {/*    </h6>*/}
                            {/*</div>*/}
                        </div>
                        <hr className="rgba-white-light" style={{margin: "0 15%"}}/>
                        <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                            <div className="col-md-8 col-12 mt-5">
                                <p style={{lineHeight: "1.7rem"}}>
                                    Movie for Elite is a media service  that allows you to enjoy on your computer, tablet, or phone – and even your TV!
                                    With no waiting, titles can be streamed immediately, or downloaded to phones or tablets for offline enjoyment later.
                                    We have hundreds of thousands of titles to choose from, with more being added daily.
                                    Watch movies on Movie for Elite. Anytime. Anywhere.
                                </p>
                            </div>
                        </div>
                        <hr className="clearfix d-md-none rgba-white-light" style={{margin: "10% 15% 5%"}}/>
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="flex-center ">
                                    <div className="row  ">
                                        <div className="col-md-12 my-4">
                                            <div className={`${CN} mb-3 d-flex justify-content-center align-content-center`}>
                                                {
                                                    !!footerIcons.length && footerIcons.map( footerIcon => (
                                                        <a className={`${CN}__col-white`} key={footerIcon.id} href='#'>
                                                            <i className={`fab ${footerIcon.icon} fa-lg white-text mr-md-5 mr-3 fa-2x`}>
                                                            </i>
                                                        </a>
                                                    ) )
                                                }
                                                {/*<a>*/}
                                                {/*    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>*/}
                                                {/*</a>*/}

                                                {/*<a>*/}
                                                {/*    <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>*/}
                                                {/*</a>*/}

                                                {/*<a>*/}
                                                {/*    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>*/}
                                                {/*</a>*/}

                                                {/*<a>*/}
                                                {/*    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>*/}
                                                {/*</a>*/}

                                                {/*<a>*/}
                                                {/*    <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>*/}
                                                {/*</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${CN} footer-copyright text-center py-3`}>© 2020 Copyright:
                        <a href="#"> MovieForElite.com</a>
                    </div>
                </footer>
            </div>
    );
}
