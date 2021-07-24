import api from './api';


const apikey = 'api_key=e0f7ddbcb7a27757fee3f82310428f34';
const language = 'language=pt-BR';

//primeiro carousel
export const GetFilmsTrending = (page) => {
    const url = `trending/movie/week?${apikey}&${language}&page=${page}`;
    return api.get(url);
}


export const GetFilmsNowPlaying = (page) => {
    const url = `movie/now_playing?${apikey}&${language}&page=${page}`;
    return api.get(url);
}


export const GetGenders = (page) => {
    const url = `genre/movie/list?${apikey}&${language}`;
    return api.get(url);
}

export const GetFilmsDiscover = page => {
    const url = `discover/movie?${apikey}&${language}&page=${page}`;
    return api.get(url);
}