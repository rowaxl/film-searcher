import { useCallback, useEffect, useState } from "react";
import IndexPageLayout from "../layouts/IndexPageLayout";
import useGetFilmDetails from "../hooks/useGetFilmDetails";
import useSearchFilms from "../hooks/useSearchFilm";
import { FilmDetail } from "../interfaces";
import { isFavedFilm } from '../libs/favedList';

const IndexPageController = () => {
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState('');
  const [searchedFilms, setSearchedFilms] = useState<FilmDetail[]>([]);

  const {
    films,
    isLoading: isSearching,
  } = useSearchFilms(query);

  const {
    filmDetails,
    isLoading: isGettingDetails,
  } = useGetFilmDetails(target);

  const handleOnSubmitQuery = (inputValue: string) => {
    setQuery(inputValue);
  }

  const handleOnClickCard = (id: string) => { 
    setTarget(id);
  }

  useEffect(() => {
    if (films) {
      films.forEach(film => Object.assign(film, { isFaved: isFavedFilm(film.id) }));
      setSearchedFilms(films)
    }
  }, [films])

  return (
    <IndexPageLayout
      onSubmit={handleOnSubmitQuery}
      onClickCard={handleOnClickCard}
      searchedFilms={searchedFilms}
      filmDetails={filmDetails}
      isLoading={isSearching || isGettingDetails}
    />
  )
}

export default IndexPageController;
