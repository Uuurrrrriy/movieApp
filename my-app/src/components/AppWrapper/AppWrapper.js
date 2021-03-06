import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import {store} from "../../store";
import App from "../../containers/HomePage/App";
import {MovieList} from "../../containers/MoviePage";
import {Header} from "../Header/Header";
import {AppFooterIconsContext, AppLinksContext} from "../../context";
import {AllLinks, FooterIconsList} from "../../constants";
import {Footer} from "../Footer/Footer";
import {NotFound} from "../../containers/NotFound/NotFound";
import {Redirect} from "react-router";
import {MovieDetailsPage} from "../../containers/MovieDetailsPage";


export const AppWrapper = () => {
    return (
        <Provider store={store}>
            <AppLinksContext.Provider value={AllLinks}>
                <AppFooterIconsContext.Provider value={FooterIconsList}>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={App} />
                            <Route exact path='/home' component={App} />
                            <Route exact path='/films'>
                                <MovieList/>
                            </Route>
                            <Route path="/films/:id" component={MovieDetailsPage}/>
                            <Route path="/not-found" component={NotFound}/>
                            <Redirect from="*" to="/not-found"/>
                        </Switch>
                        <Footer/>
                    </Router>
                </AppFooterIconsContext.Provider>
            </AppLinksContext.Provider>
        </Provider>
    );
};
