import { useState } from "react";
import useGetFilmDetails from "../hooks/useGetFilmDetails";
import useSearchFilms from "../hooks/useSearchFilm";
import { FilmDetail } from "../interfaces";
import IndexPageLayout from "../layouts/IndexPageLayout";

const IndexPageController = () => {
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState<FilmDetail>();
  const {
    films,
    isLoading: isSearching,
    error: searchError
  } = useSearchFilms(query);

  const {
    filmDetails,
    isLoading: isGettingDetails,
    error: getError
  } = useGetFilmDetails(target?.id);

  const handleOnChangeQuery = (inputValue: string) => {
    console.log('handleOnChangeQuery')
    setQuery(inputValue);
  }

  const handleOnSubmitQuery = (inputValue: string) => {
    setQuery(inputValue);
  }

  return (
    <IndexPageLayout
      onSubmit={handleOnSubmitQuery}
      onChange={handleOnChangeQuery}
      searchedFilms={films?.results}
      filmDetails={filmDetails}
    />
  )
}

export default IndexPageController;
