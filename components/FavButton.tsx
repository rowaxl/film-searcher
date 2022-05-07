import { memo, useState } from 'react';
import { addFavedFilm, removeFavedFilm, isFavedFilm } from '../libs/favedList';
import styles from '../styles/FavButton.module.css';

interface FavButtonProps {
  id: string
}

const FavButton = ({ id }: FavButtonProps) => {
  const [isFaved, setIsFaved] = useState(isFavedFilm(id));

  const handleClickFavButton = () => {
    if (!isFaved) {
      addFavedFilm(id);
      setIsFaved(true);
    } else {
      removeFavedFilm(id);
      setIsFaved(false);
    }
  }

  return (
    <button
      className={isFaved ? `${styles.favButton} ${styles.faved}` : styles.favButton}
      onClick={handleClickFavButton}
    >
      <svg width = "1em" height = "1em" viewBox = "0 0 16 16" fill = "currentColor" xmlns = "http://www.w3.org/2000/svg" >
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>
    </button>
  )
}

export default memo(FavButton);
