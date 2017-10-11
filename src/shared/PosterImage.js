import React from 'react';

function fullUrl(path) {
    return `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${path}`;
}

export function PosterImage({ path, title }) {
    return (
        <img src={ fullUrl(path) } alt={ title } />
    );
}