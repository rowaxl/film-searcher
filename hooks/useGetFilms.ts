import { useState, useEffect } from 'react';
import { FilmDetail } from '../interfaces';
import { generateGetFilmDetailUrl } from '../libs/config';
import { fetcher } from '../libs/fetcher';

const useGetFilms = (ids?: number[]) => {
  const [films, setFilms] = useState<FilmDetail[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const doGetDetail = async (ids: number[]) => {
    setIsLoading(true);
    const promises = ids.map(id => fetcher<FilmDetail>(generateGetFilmDetailUrl(id.toString())));

    const result = await Promise.all(promises);

    setFilms(result);
    setIsLoading(false);
  }

  useEffect(() => {
    if (ids) doGetDetail(ids);
  }, [ids]);

  return {
    films,
    isLoading,
  }
}

export default useGetFilms;
