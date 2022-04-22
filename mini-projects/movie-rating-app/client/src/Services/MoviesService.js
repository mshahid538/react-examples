import { API_URL, API_KEY }  from '../constants';
import axios from 'axios';

const api_key = `api_key=${API_KEY}`;
const query_param = 'query=jaws';

export const getConfigureMovieAPI = async () => {
    const configure = await axios.get(`${API_URL}/configuration?${api_key}`); 
}

export const getAllMovies = async() => { 
    const response = await axios.get(`${API_URL}/search/movie?${api_key}&${query_param}`);
     
    return response.data;
}

