import useSWR from 'swr';
import { SearchFilmResponse } from '../interfaces';
import { API_URL_SEARCH_FILM } from '../libs/config';
import { fetcher } from '../libs/fetcher';

const useSearchFilms = (query?: string) => {
  const { data: films, error } = useSWR<SearchFilmResponse>(`${API_URL_SEARCH_FILM}${query}`, fetcher);

  return {
    films: films?.results,
    isLoading: !films && !error,
    error,
  }
}

export default useSearchFilms;
