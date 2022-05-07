import { useCallback, useState, useMemo } from 'react';
import Image from 'next/image';
import Dialog from '../components/Dialog';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { FilmDetail } from '../interfaces';
import Overlay from '../components/Spinner';
import PageHeader from '../components/Header';

interface IndexPageLayoutProps {
  onSubmit: (query: string) => void
  onClickCard: (id: string) => void
  isLoading: boolean
  searchedFilms?: FilmDetail[]
  filmDetails?: FilmDetail
}

const IndexPageLayout = ({
  onSubmit,
  onClickCard,
  isLoading,
  searchedFilms,
  filmDetails,
}: IndexPageLayoutProps) => {
  const [isFilmDetailOpen, setIsFilmDetailOpen] = useState(false);
  const [, updateState] = useState<{}>()
  const forceUpdate = useCallback(() => updateState({}), [])

  const handleOnClickCard = (id: string) => {
    onClickCard(id);
    setIsFilmDetailOpen(true);
  }

  const searchedFilmMemo = useMemo(() => {
    if (!searchedFilms) return <></>;

    return searchedFilms.map(film => (
      <FilmCard
        key={film.id}
        detail={film}
        isButton={true}
        onClick={handleOnClickCard}
      />
    ))
  }, [searchedFilms]);

  return (
    <div className="min-vh-100">
      <PageHeader />

      <main id="react-modal" className="container">
        <div className="mt-4">
          <SearchForm onSubmit={onSubmit} />
        </div>

        <div className="list-group overflow-scroll">
          {searchedFilmMemo}
        </div>

        <Dialog isOpen={isFilmDetailOpen}>
          <FilmCard
            detail={filmDetails}
            isButton={false}
          />

          <button
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
