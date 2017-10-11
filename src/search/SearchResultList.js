import React from 'react';
import { SearchResultListItem } from './SearchResultListItem';

export function SearchResultList({ movies }) {
    return (
        <div className="SearchResultList">
            { movies.map(movie => (
                <SearchResultListItem
                    key={ movie.id }
                    movie={ movie }
                />
            )) }
        </div>
    );
}