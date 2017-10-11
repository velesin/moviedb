import React from 'react';

function fullUrl(path) {
    return `https://image.tmdb.org/t/p/w90_and_h134_bestv2/${path}`;
}

export function PosterImage({ path, title }) {
    return (
        <img src={ fullUrl(path) } alt={ title } />
    );
}