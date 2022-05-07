import { useState, useEffect, useReducer } from "react";
import IndexPageLayout from "../layouts/IndexPageLayout";
import useGetFilmDetails from "../hooks/useGetFilmDetails";
import useSearchFilms from "../hooks/useSearchFilm";
import { FilmDetail } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";
import { toggleFav, selectFavs } from "../store/reducers/favs";
import useGetFilms from "../hooks/usegetFilms";

const IndexPageController = () => {
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState<number>();
  const [searchedFilms, setSearchedFilms] = useState<FilmDetail[]>([]);
  const [filmDetail, setFilmDetail] = useState<FilmDetail>();
  const [favedFilms, setFavedFilms] = useState<FilmDetail[]>([]);
  const favs = useSelector(selectFavs);
  const dispatch = useDispatch();

  const {
    films,
    isLoading: isSearching,
  } = useSearchFilms(query);

  const {
    filmDetails,
    isLoading: isGettingDetails,
  } = useGetFilmDetails(target);

  const {
    films: favedFilmList,
    isLoading: isLoadingFavedFilms
  } = useGetFilms(favs);

  const handleOnSubmitQuery = (inputValue: string) => {
    setQuery(inputValue);
  }

  const handleOnClickCard = (id: number) => { 
    setTarget(id);
  }

  const handleOnClickFavButton = (id: number) => {
    dispatch(toggleFav(id));

    const isFaved = favs.findIndex(f => f === id) > -1;

    if (films) {
      const copied = [...films];
      copied.forEach(film => {
        if (film.id === id) Object.assign(film, { isFaved: !isFaved })
      });
      setSearchedFilms(copied);
    }

    if (filmDetail && id === filmDetail.id) {
      setFilmDetail({ ...filmDetail, isFaved: !isFaved });
    }
  }

  useEffect(() => {
    if (films) {
      films.forEach(film => {
        const isFaved = favs.findIndex(f => f === film.id) > -1;
        Object.assign(film, { isFaved })
      });
      setSearchedFilms(films)
    }
  }, [films])

  useEffect(() => {
    if (filmDetails) {
      const isFaved = favs.findIndex(f => f === filmDetails.id) > -1;
      setFilmDetail({...filmDetails, isFaved });
    }
  }, [filmDetails]);

  useEffect(() => {
    if (favedFilmList) {
      favedFilmList.forEach(film => {
        const isFaved = favs.findIndex(f => f === film.id) > -1;
        Object.assign(film, { isFaved })
      });
      setFavedFilms(favedFilmList);
    }
  }, [favedFilmList]);

  return (
    <IndexPageLayout
      onSubmit={handleOnSubmitQuery}
      onClickCard={handleOnClickCard}
      onClickFavButton={handleOnClickFavButton}
      searchedFilms={searchedFilms}
      filmDetails={filmDetail}
      favedList={favedFilms}
      isLoading={isSearching || isGettingDetails || isLoadingFavedFilms}
    />
  )
}

export default IndexPageController;
