import React, { Component } from 'react';
import { search } from './services/movies.service';
import { SearchBox } from './search/SearchBox';
import { SearchResultList } from './search/SearchResultList';

class App extends Component {
    state = {
        movies: []
    }

    doSearch = async query => {
        const { results: movies } = await search(query);
        this.setState({ movies });
    }
    
    render() {
        return (
            <div className="Search">
                <SearchBox onQuerySubmit={ this.doSearch } />
                <SearchResultList movies={ this.state.movies }/>
            </div>            
        );
    }    
}

export default App;
