import { useState } from "react";
import useGetFilmDetails from "../hooks/useGetFilmDetails";
import useSearchFilms from "../hooks/useSearchFilm";
import { FilmDetail } from "../interfaces";
import IndexPageLayout from "../layouts/IndexPageLayout";

const IndexPageController = () => {
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState('');
  const {
    films,
    isLoading: isSearching,
    error: searchError
  } = useSearchFilms(query);

  const {
    filmDetails,
    isLoading: isGettingDetails,
    error: getError
  } = useGetFilmDetails(target);

  const handleOnChangeQuery = (inputValue: string) => {
    console.log('handleOnChangeQuery')
    setQuery(inputValue);
  }

  const handleOnSubmitQuery = (inputValue: string) => {
    setQuery(inputValue);
  }

  const handleOnClickCard = (id: string) => { 
    setTarget(id);
  }

  return (
    <IndexPageLayout
      onSubmit={handleOnSubmitQuery}
      onChange={handleOnChangeQuery}
      onClickCard={handleOnClickCard}
      searchedFilms={films?.results}
      filmDetails={filmDetails}
      isLoading={isSearching || isGettingDetails}
    />
  )
}

export default IndexPageController;
