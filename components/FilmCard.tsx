import { FilmDetail } from '../interfaces';
import FavButton from './FavButton';
import Poster from './Poster';

interface FilmCardProps {
  isButton: boolean
  detail?: FilmDetail
  onClick?: (id: number) => void
  onClickFavButton: (id: number) => void
}

const FilmCard = ({ isButton, detail, onClick, onClickFavButton }: FilmCardProps) => {
  const handleOnClick = () => {
    if (onClick && detail) onClick(detail.id);
  }

  const renderFilmCard = () => {
    if (!detail) return <></>;

    if (isButton) {
      return (
        <div className="row no-gutters">
          <div className="col-lg w-100" onClick={handleOnClick}>
            <Poster src={detail.backdrop_path} alt={detail.title} isThumbnail={true} />
          </div>

          <div className="col-sm-7 position-relative w-100">
            <h3 className="my-2 mx-2" onClick={handleOnClick}>
              {detail.title}
              <span className="h6 ms-2">
                ({detail.release_date.slice(0, 4)})
              </span>
            </h3>

            <FavButton id={detail.id} isFaved={detail.isFaved} onClick={onClickFavButton} />
          </div>
        </div>
      )
    }

    return (
      <div className="card row no-gutters py-2 position-relative">
        <div className="col-lg-5 col-12 card-img">
          <Poster src={detail.poster_path} />
        </div>

        <div className="col-sm-7 w-100">
          <h4 className="card-title mr-4">
            {detail.original_title}
          </h4>

          <p className="h6">
            User Score: {detail.vote_average * 10}
          </p>

          <p>Released at: {detail.release_date}</p>

          <p>{detail.overview}</p>
        </div>

        <FavButton id={detail.id} isFaved={detail.isFaved} onClick={onClickFavButton} />
      </div>
    )
  }

  return (
    <div className="card border-none mb-2">
      {renderFilmCard()}
    </div>
  )
}

export default FilmCard;
