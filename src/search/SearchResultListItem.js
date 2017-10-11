import React from 'react';
import { PosterImage } from '../shared/PosterImage';

import './SearchResultListItem.css'

export function SearchResultListItem({ movie }) {
    return (
        <div className="SearchResultListItem">
            <div className="SearchResultListItem__card">
                <div className="SearchResultListItem__front">
                    <PosterImage path={ movie.poster_path} title={ movie.title } />
                </div>
                <div className="SearchResultListItem__back">
                    <div className="SearchResultListItem__title">{ movie.title }</div>
                    <div className="SearchResultListItem__synopsis">{ movie.overview }</div>
                    <div className="SearchResultListItem__meta">
                        <div className="SearchResultListItem__date">{ movie.release_date }</div>
                        <div className="SearchResultListItem__rating">★ { movie.vote_average }</div>                        
                    </div>                    
                </div>                    
            </div>            
        </div>
    );
}