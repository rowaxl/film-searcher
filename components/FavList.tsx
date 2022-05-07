import { useSelector } from 'react-redux';
import { selectFavs } from '../store/reducers/favs';
import { FilmDetail } from "../interfaces";
import FilmCard from "./FilmCard";

interface FavListProps {
  favedFilms: FilmDetail[]
  onClickCard: (id: number) => void
  onClickFavButton: (id: number) => void
}

const FavList = ({ favedFilms, onClickCard, onClickFavButton }: FavListProps) => {
  return (
    <ul className="list-group">
      {
        favedFilms && favedFilms.length > 0 ?
          favedFilms.map(film => (
            <li key={film.id} className="list-group-item">
              <FilmCard
                detail={film}
                isButton={true}
                onClick={onClickCard}
                onClickFavButton={onClickFavButton}
              />
            </li>
          )) :
          <li className="list-group-item">
            There&apos;s no favorited films yet.
          </li>
      }
    </ul>
  )
}

export default FavList;
