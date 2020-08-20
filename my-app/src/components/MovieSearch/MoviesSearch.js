import React, {Component, createRef} from 'react';
import search from '../../assets/img_for_search_component.jpg'
import {Loading} from "../Loading/Loading";
import {MovieCard} from "../MovieCard";
import {Button} from "../Button/Button";
import {Jumbotron} from "../Jumbotron/Jumbotron";
import queryString from "query-string";
import {MoviePagination} from "../MoviePagination/MoviePagination";
import Form from 'react-bootstrap/Form'
import JumbotronImage from "../../assets/jumbotron_image.jpg";


export class MoviesSearch extends Component{
    constructor(props) {
        super(props);
        this.search = createRef();
        this.state = {
            blockLoading: false,
            currentError: '',
            validated: false
        }
    }
    // const { moviesConfig: { moviesSearchList, isLoading: isSearchMoviesLoading } }= props;
    // useEffect( () => {
    //     loadSearchMovies();
    // },[] );

    // componentDidMount() {
    //     // const { location: { search } ,moviesSearchConfig: { page } } = this.props;
    //     // // console.log(page);
    //     //
    //     // const params = queryString.parse(search);
    //     // const { page: pageFromUrl } = params;
    //     //
    //     // const pageNum = pageFromUrl ? pageFromUrl : page;
    //
    //     // this.loadMovies();
    //     // this.loadMovies();
    // }

    // loadMovies = () => {
    //     const { actions } = this.props;
    //     const {getMovies} = actions;
    //     // debugger
    //     // console.log(actions.getMovies());
    //     getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}`);
    // };

    loadSearchMovies = (query,page) => {
        const { actions } = this.props;
        const { getSearchMovies } = actions;
        console.log(actions);
        getSearchMovies(page,query);
    };

    updateUrl = (page,query) => {
        // апдейт урлы в адресной строке, меняем query search
        const { history } = this.props;
        const newParams = {
            page,
            query
        };
        history.replace({ search: queryString.stringify(newParams) });
    };

    setPage = (pageNum) => {
        // const { actions: { setPage } } = this.props;

        return () => {
            // const { usersConfig: { perPage } } = this.props;
            this.loadSearchMovies(this.search.current.value,pageNum);
            this.updateUrl(pageNum,this.search.current.value);
        };
    };


    onSelectPost = (id) => {
        const { history, match: { url } } = this.props;

        // console.log(this.props);

        history.push(`${url}/${id}`);
    };

    onInputChange = (e) => {
        console.log(e.target.value);
        const { currentError } = this.state;
        if ( currentError && this.search.current.value ) {
            this.state.currentError = '';
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        // const newUrl = `https://api.themoviedb.org/3/search/movie?api_key=${accessToken}&query=${this.search.current.value}`;
        // const { actions } = this.props;
        // const { getSearchMovies } = actions;
        //
        // console.log(actions);
        // console.log(this.state);

        const { location: { search } ,moviesSearchConfig: { page } } = this.props;
            // console.log(page);

        const params = queryString.parse(search);
        const { page: pageFromUrl } = params;

        const pageNum = pageFromUrl ? pageFromUrl : page;

        this.setState({
            blockLoading: true
        });

            // this.loadSearchMovies(this.search.current.value,pageNum);

        if (!this.search.current.value) {
            this.setState({
                currentError: 'Enter some movie'
            });
            this.setState({
                blockLoading: false
            });
            // this.loadMovies();
            this.updateUrl('','');
        } else {
            this.loadSearchMovies(this.search.current.value,pageNum);
        }
        // this.search.current.value = '';

    };

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            // event.stopPropagation();
        }

       this.setState({
           validated: true
       });
        this.onSubmit(event);
    };

    render() {
        const { moviesSearchConfig: { movieSearchList, isLoading: isSearchMoviesLoading, page, totalPages },
            // moviesConfig: { movieList, isLoading: isMoviesLoading },
            match: { url },
            portionSize = 10 }= this.props;
        const { validated, currentError } = this.state;
        // const { moviesConfig: { movieList, isLoading: isMoviesLoading } } = this.props;
        console.log(this.props);
        return (
           <div>
               <Jumbotron path={url}/>
               <div className='mb-2 mr-2 ml-2 pr-4 pl-4 pt-5 pb-5' style={{backgroundImage: `url(${search})`}}>
                  <div className='d-flex justify-content-center align-content-center '>
                      <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                          <Form.Control
                              ref={this.search}
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                              onChange={this.onInputChange}
                              required />
                              <Form.Control.Feedback type="invalid">
                                  {
                                      currentError
                                  }
                              </Form.Control.Feedback>
                      </Form>
                      <Button  className="btn btn-outline-primary ml-2 my-2 my-sm-0"
                               type="submit"
                               label='Search'
                              onClick={this.handleSubmit}
                      />
                      {/*<form className="form-inline">*/}
                      {/*    <input className="form-control mr-sm-2"*/}
                      {/*           ref={this.search}*/}
                      {/*           type="search"*/}
                      {/*           placeholder="Search"*/}
                      {/*           aria-label="Search"*/}
                      {/*           onChange={this.onInputChange}*/}
                      {/*        // value={this.state.search}*/}
                      {/*    />*/}
                      {/*    <Button  className="btn btn-outline-primary  my-2 my-sm-0"*/}
                      {/*             type="submit"*/}
                      {/*             label='Search'*/}
                      {/*             onClick={this.onSubmit}*/}
                      {/*    />*/}
                      {/*</form>*/}
                  </div>
                   {
                       !this.state.blockLoading  ?
                           <div className='pb-5'>
                               {/*{*/}
                               {/*    !currentError ? (*/}
                               {/*        <div className='pt-4'>*/}
                               {/*            {isMoviesLoading && <Loading/>}*/}

                               {/*            {*/}
                               {/*                !isMoviesLoading && !!movieList.length && (*/}
                               {/*                    <div className='row row-cols-1 row-cols-md-3'>*/}
                               {/*                        {*/}
                               {/*                            movieList.map(movie => (*/}
                               {/*                                <div className='col mb-4' key={movie.id}>*/}
                               {/*                                    <MovieCard item={movie} onSelect={this.onSelectPost}/>*/}
                               {/*                                </div>*/}
                               {/*                            ))*/}
                               {/*                        }*/}
                               {/*                    </div>*/}
                               {/*                )*/}
                               {/*            }*/}
                               {/*        </div>*/}
                               {/*    ) : ''*/}
                               {/*}*/}
                           </div> :
                           <div>
                               <div
                                   className={`pagination d-flex justify-content-center align-items-center ${isSearchMoviesLoading ? 'disabled' : ''}`}>
                                   <div className="pt-5 pb-4">
                                       <div className="pages">
                                           <MoviePagination
                                               currentPage={page}
                                               pageCount={totalPages}
                                               portionSize={portionSize}
                                               onPageClick={this.setPage}/>
                                       </div>
                                   </div>
                               </div>
                               {isSearchMoviesLoading && <Loading/>}
                               {
                                   !isSearchMoviesLoading && !!movieSearchList.length && (
                                       <div className='row row-cols-1 row-cols-md-3'>
                                           {
                                               movieSearchList.map(item => (
                                                   <div className='col mb-4' key={item.id}>
                                                       <MovieCard item={item} onSelect={this.onSelectPost}/>
                                                   </div>
                                               ))
                                           }
                                       </div>
                                   )
                               }
                           </div>
                   }
                   {/*<div className={`pagination d-flex justify-content-center align-items-center ${isSearchMoviesLoading ? 'disabled' : ''}`}>*/}
                   {/*    <div className="pt-5 pb-4">*/}
                   {/*        <div className="pages">*/}
                   {/*            <MoviePagination*/}
                   {/*                currentPage={page}*/}
                   {/*                pageCount={totalPages}*/}
                   {/*                portionSize={portionSize}*/}
                   {/*                onPageClick={this.setPage} />*/}
                   {/*        </div>*/}
                   {/*    </div>*/}
                   {/*</div>*/}
                   {/*{ isSearchMoviesLoading && <Loading/> }*/}
                   {/*{*/}
                   {/*    !isSearchMoviesLoading && !!movieSearchList.length && (*/}
                   {/*        <div className='row row-cols-1 row-cols-md-3'>*/}
                   {/*            {*/}
                   {/*                movieSearchList.map( item => (*/}
                   {/*                    <div className='col mb-4' key={item.id}>*/}
                   {/*                        <MovieCard item={item} onSelect={this.onSelectPost} />*/}
                   {/*                    </div>*/}
                   {/*                )  )*/}
                   {/*            }*/}
                   {/*        </div>*/}
                   {/*    )*/}
                   {/*}*/}
               </div>
           </div>
        );
    }
}
