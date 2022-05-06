import useSWR from 'swr';
import { FilmDetail } from '../interfaces';
import { generateGetFilmDetailUrl } from '../libs/config';
import { fetcher } from '../libs/fetcher';

const useGetFilmDetails = (id?: string) => {
  const { data: filmDetails, error } = useSWR<FilmDetail>(id ? generateGetFilmDetailUrl(id) : '', fetcher);

  return {
    filmDetails,
    isLoading: !filmDetails && !error,
    error,
  }
}

export default useGetFilmDetails;
