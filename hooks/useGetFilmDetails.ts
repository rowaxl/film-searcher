import { useState, useEffect } from 'react';
import { FilmDetail } from '../interfaces';
import { generateGetFilmDetailUrl } from '../libs/config';
import { fetcher } from '../libs/fetcher';

const useGetFilmDetails = (id?: number) => {
  const [filmDetails, setFilmDetails] = useState<FilmDetail>();
  const [isLoading, setIsLoading] = useState(false);

  const doGetDetail = async (id: string) => {
    setIsLoading(true);
    const data = await fetcher<FilmDetail>(generateGetFilmDetailUrl(id));

    setFilmDetails(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (id) doGetDetail(id.toString());
  }, [id]);

  return {
    filmDetails,
    isLoading,
  }
}

export default useGetFilmDetails;
