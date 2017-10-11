import React, { Component } from 'react';

import './SearchBox.css';

export class SearchBox extends Component {
    state = {
        query: ''
    };    

    submitQuery = event => {
        event.preventDefault();
        this.props.onQuerySubmit(this.state.query);
    }

    updateQuery = event => {
        this.setState({ query: event.target.value });
    }

    render() {
        return (
            <form
                className="SearchBox"
                onSubmit={ this.submitQuery }
            >
                <input
                    className="SearchBox__input"
                    type="text"
                    value={ this.state.query }
                    onChange={ this.updateQuery }
                />
                <input
                    className="SearchBox__button"
                    type="submit"
                    value="Search"
                />
            </form>
        );
    }    
}