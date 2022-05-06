import Image from 'next/image';
import { FilmDetail } from '../interfaces';
import styles from '../styles/Card.module.css';
import FavButton from './FavButton';

interface FilmCardProps {
  isButton: boolean
  detail?: FilmDetail
  onClick?: (id: string) => void
}

const FilmCard = ({ isButton, detail, onClick }: FilmCardProps) => {
  const handleOnClick = () => {
    if (onClick && detail) onClick(detail.id);
  }

  const renderFilmCard = () => {
    if (!detail) return <></>;

    if (isButton) {
      return (
        <div className={styles.cardItem}>
          <h3>{detail.name}</h3>

        </div>
      )
    }

    return (
      <div className={styles.cardItem}>
        <Image src={detail.posterPath} layout="responsive" alt={detail.name} />

        <h3>{detail.name}</h3>

        <p>{detail.overview}</p>

        <FavButton isFaved={detail.isFaved || false} />
      </div>
    )
  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      {renderFilmCard()}
    </div>
  )
}

export default FilmCard;
