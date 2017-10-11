jest.mock('./services/movies.service');

import React from 'react';
import { shallow } from 'enzyme';

import { search } from './services/movies.service'
import App from './App';

let app;

beforeEach(() => {
    app = shallow(<App />);    
});

it('renders correct initial page layout', () => {
    expect(app.getElement()).toMatchSnapshot();
});

describe('when user submits a query via the search box', () => {    
    const QUERY = 'QUERY';
    const FOUND_MOVIES = 'FOUND_MOVIES';
    
    beforeEach(async () => {
        search.mockReturnValue({ results: FOUND_MOVIES });
        search.mockClear();

        await app.find('SearchBox').simulate('querySubmit', QUERY);
        app.update();
    });

    it('sends the query to the API', () => {
        expect(search.mock.calls[0][0]).toEqual(QUERY);
    });

    it('updates the result list with the movies received from the API', () => {
        expect(app.find('SearchResultList').prop('movies')).toEqual(FOUND_MOVIES);
    });
});
