import React, { Component } from 'react';
import {

    Link
} from "react-router-dom";

class SearchBarAll extends Component {
    state = {
        search: '',
    }
    handleChange = (event) => {
        this.setState({ search: event.target.value });
    }
    render() {
        return (
            <form action="" className='searchbar'>
                <input type="text" placeholder='What are you in the mood for?' onChange={this.handleChange} />
                <Link to={`/search/${this.state.search}`}>Search</Link>
            </form>
        );
    }
}

export default SearchBarAll;