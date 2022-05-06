import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Dialog from '../components/Dialog';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { FilmDetail } from '../interfaces';
import styles from '../styles/Home.module.css';
import Overlay from '../components/Spinner';

interface IndexPageLayoutProps {
  onSubmit: (query: string) => void
  onChange: (query: string) => void
  onClickCard: (id: string) => void
  isLoading: boolean
  searchedFilms?: FilmDetail[]
  filmDetails?: FilmDetail
}

const IndexPageLayout = ({
  onSubmit,
  onChange,
  onClickCard,
  isLoading,
  searchedFilms,
  filmDetails,
}: IndexPageLayoutProps) => {
  const [isFilmDetailOpen, setIsFilmDetailOpen] = useState(false);

  const handleOnChange = (query: string) => {
    console.log('handleOnChange')
    onChange(query);
  }

  const handleOnClickCard = (id: string) => {
    onClickCard(id);
    setIsFilmDetailOpen(true);
  }

  return (
    <div className={styles.containers}>
      <Head>
        <title>Film Searcher</title>
      </Head>

      <main>
        <div>
          <SearchForm
            onSubmit={onSubmit}
            onChange={handleOnChange}
          />
        </div>

        <div>
          {searchedFilms && searchedFilms.map(film => (
            <FilmCard
              key={film.id}
              detail={film}
              isButton={true}
              onClick={handleOnClickCard}
            />
          )) }
        </div>

        <Dialog
          isOpen={isFilmDetailOpen}
        >
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

      <footer>
        Powered by TMDB <Image src="TMDB_logo2-01.png" alt="TMDB_logo" className="tmdb_logo" />
      </footer>
    </div>
  )
}

export default IndexPageLayout;
