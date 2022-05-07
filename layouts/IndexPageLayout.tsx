import { useState } from 'react';
import Dialog from '../components/Dialog';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { FilmDetail } from '../interfaces';
import Overlay from '../components/Spinner';
import PageHeader from '../components/Header';
import FavList from '../components/FavList';

interface IndexPageLayoutProps {
  onSubmit: (query: string) => void
  onClickCard: (id: number) => void
  onClickFavButton: (id: number) => void
  isLoading: boolean
  searchedFilms?: FilmDetail[]
  filmDetails?: FilmDetail
  favedList: FilmDetail[]
}

const IndexPageLayout = ({
  onSubmit,
  onClickCard,
  onClickFavButton,
  isLoading,
  searchedFilms,
  filmDetails,
  favedList,
}: IndexPageLayoutProps) => {
  const [isFilmDetailOpen, setIsFilmDetailOpen] = useState(false);
  const [isFavListOpen, setIsFavListOpen] = useState(false);
  
  const handleOnClickCard = (id: number) => {
    onClickCard(id);
    setIsFilmDetailOpen(true);
  }

  return (
    <div id="main" className="min-vh-100">
      <PageHeader onClickFaved={() => setIsFavListOpen(true)} />

      <main className="container">
        <div className="mt-4">
          <SearchForm onSubmit={onSubmit} />
        </div>

        <div className="list-group overflow-scroll">
          {
            searchedFilms &&
            searchedFilms.map(film => (
              <FilmCard
                key={film.id}
                detail={film}
                isButton={true}
                onClick={handleOnClickCard}
                onClickFavButton={onClickFavButton}
              />
            ))
          }
        </div>

        <Dialog isOpen={isFavListOpen}>
          <div className="card h-100">
            <div className="card-header">
              <h3>Your Favorites</h3>
            </div>

            <div style={{ maxHeight: 600, overflow: 'scroll' }}>
              <FavList
                favedFilms={favedList}
                onClickCard={handleOnClickCard}
                onClickFavButton={onClickFavButton}
              />
            </div>
          </div>

          <button
            className="btn btn-secondary w-100"
            onClick={() => setIsFavListOpen(false)}
          >
            Close
          </button>
        </Dialog>

        <Dialog isOpen={isFilmDetailOpen}>
          <FilmCard
            detail={filmDetails}
            isButton={false}
            onClickFavButton={onClickFavButton}
          />

          <button
            className="btn btn-secondary w-100"
            onClick={() => setIsFilmDetailOpen(false)}
          >
            Close
          </button>
        </Dialog>

        <Overlay isShown={isLoading}/>
      </main>
    </div>
  )
}

export default IndexPageLayout;
