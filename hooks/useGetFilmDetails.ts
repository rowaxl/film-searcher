import { useState, useEffect } from 'react';
import { FilmDetail } from '../interfaces';
import { generateGetFilmDetailUrl } from '../libs/config';
import { isFavedFilm } from '../libs/favedList';
import { fetcher } from '../libs/fetcher';

const useGetFilmDetails = (id?: string) => {
  const [filmDetails, setFilmDetails] = useState<FilmDetail>();
  const [isLoading, setIsLoading] = useState(false);

  const doGetDetail = async (id: string) => {
    setIsLoading(true);
    const data = await fetcher<FilmDetail>(generateGetFilmDetailUrl(id));

    if (data) {
      Object.assign(data, { isFaved: isFavedFilm(data.id) });
    }

    console.log({ data })

    setFilmDetails(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (id) doGetDetail(id);
  }, [id]);

  return {
    filmDetails,
    isLoading,
  }
}

export default useGetFilmDetails;
