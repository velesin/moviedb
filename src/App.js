import React, { Component } from 'react';

import { search } from './services/movies.service';
import { SearchBox } from './search/SearchBox';
import { SearchResultList } from './search/SearchResultList';
import { ProgressBar } from './shared/ProgressBar';

import './App.css';

class App extends Component {
    state = {
        isLoading: false,
        movies: []
    }

    doSearch = async query => {
        this.setState({ isLoading: true, movies: [] });
        const { results: movies } = await search(query);
        this.setState({ isLoading: false, movies });
    }
    
    render() {
        return (
            <div className="App">
                <SearchBox onQuerySubmit={ this.doSearch } />
                <SearchResultList movies={ this.state.movies }/>
                { this.state.isLoading ? <ProgressBar /> : null }
            </div>            
        );
    }    
}

export default App;
