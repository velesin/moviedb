import axios from 'axios';

export const API_KEY = '1fae2145c81ecf95772954100daa93ab';
export const API_URL = 'https://api.themoviedb.org/3';

export async function search(query, page = 1) {
    const params = { api_key: API_KEY, query, page };
    const { data } = await axios.get(`${API_URL}/search/movie`, { params });
    return data;
}