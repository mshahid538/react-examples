import { API_URL, API_KEY }  from '../constants';
import axios from 'axios';

const api_key = `api_key=${API_KEY}`;
const query_param = 'query=jaws';

export const getConfigureMovieAPI = async () => {
    const configure = await axios.get(`${API_URL}/configuration?${api_key}`);  
    return configure;
}

export const getAllMovies = async() => { 
    const response = await axios.get(`${API_URL}/search/movie?${api_key}&${query_param}`);
     
    return response.data;
}

export const getMovieInfo = async(id) => { 
    const response = await axios.get(`${API_URL}/movie/${id}?${api_key}`);
     
    return response.data;
}

export const getTopRatedMovies = async() => { 
    const response = await axios.get(`${API_URL}/discover/movie/?${api_key}&certification_country=US&certification=R&sort_by=vote_average.desc`);
     
    return response.data;
}

export const saveNewRating = async(id, rating) => { 
    // const response = await axios.get(`${API_URL}/search/movie?${api_key}&${query_param}`);
     
    // return response.data;
    return true;
}


