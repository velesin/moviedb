jest.mock('axios');

import axios from 'axios';
import { search, API_KEY } from './movies.service';

const SEARCH_RESPONSE_DATA = 'SEARCH_RESPONSE_DATA';
const QUERY = 'some query';
const PAGE = 3;

beforeEach(() => {
    axios.get.mockReturnValue({ data: SEARCH_RESPONSE_DATA });
    axios.get.mockClear();
});

it('hits the correct API URL', async () => {
    const result = await search(QUERY);
    await expect(axios.get.mock.calls[0][0]).toEqual('https://api.themoviedb.org/3/search/movie');
});

it('passes correct params to the API', async () => {
    const result = await search(QUERY, PAGE);
    await expect(axios.get.mock.calls[0][1]).toEqual({
        params: {
            api_key: API_KEY,
            page: PAGE,
            query: QUERY
        }        
    });
});

it('requests first page if page number is not provided', async () => {
    const result = await search('query');
    await expect(axios.get.mock.calls[0][1].params.page).toEqual(1);
});

it('returns data obtained from the API', async () => {
    const result = await search('query');
    await expect(result).toEqual(SEARCH_RESPONSE_DATA);
});