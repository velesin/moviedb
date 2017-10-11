import React from 'react';
import { PosterImage } from '../shared/PosterImage';

export function SearchResultListItem({ movie }) {
    return (
        <div className="SearchResultListItem">
            <PosterImage path={ movie.poster_path} title={ movie.title } />
            <div className="SearchResultListItem__title">{ movie.title }</div>
            <div className="SearchResultListItem__date">{ movie.release_date }</div>
            <div className="SearchResultListItem__rating">{ movie.vote_average }</div>            
        </div>
    );
}