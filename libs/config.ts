export const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || '';

export const API_URL_SEARCH_FILM = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

const API_URL_GET_FILM_DETAIL = `${API_BASE_URL}/movie`;

export const generateGetFilmDetailUrl = (id: string) => `${API_URL_GET_FILM_DETAIL}/${id}?api_key=${API_KEY}`;
