import React, { Component } from 'react';

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
            <form onSubmit={ this.submitQuery }>
                <input
                    type="text"
                    value={ this.state.query }
                    onChange={ this.updateQuery }
                />
                <input type="submit" value="Search" />
            </form>
        );
    }    
}