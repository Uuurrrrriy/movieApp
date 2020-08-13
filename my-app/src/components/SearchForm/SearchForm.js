import React, {Component} from 'react';
import uniqId from 'uniqid';
import './SearchForm.scss'
import {Button} from "../Button/Button";

const CN = 'search-form';
export class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            id: uniqId()
        }
    }
    onInputChange = (e) => {
        const { id } = e.target;
        console.log(id);

        this.setState({
            [id]: e.target.value
        });
    };
    render() {
        return (
            <div className={`${CN}__form-container`}>
                <form className="form-inline">
                    <input className="form-control mr-sm-2"
                           id="search"
                           type="search"
                           placeholder="Search"
                           aria-label="Search"
                           onChange={this.onInputChange}
                           value={this.state.search}
                    />
                    <Button  className="btn btn-outline-primary  my-2 my-sm-0"
                             type="submit"
                             label='Search'
                    />
                    {/*<button className="btn btn-outline-primary  my-2 my-sm-0" type="submit">Search</button>*/}
                </form>
            </div>
        );
    }
}
