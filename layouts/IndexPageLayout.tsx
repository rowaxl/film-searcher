import Head from 'next/head';
import Dialog from '../components/Dialog';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { FilmDetail } from '../interfaces';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

interface IndexPageLayoutProps {
  onSubmit: (query: string) => void
  onChange: (query: string) => void
  searchedFilms?: FilmDetail[]
  filmDetails?: FilmDetail
}

const IndexPageLayout = ({
  onSubmit,
  onChange,
  searchedFilms,
  filmDetails,
}: IndexPageLayoutProps) => {
  const [isFilmDetailOpen, setIsFilmDetailOpen] = useState(false);

  const handleOnChange = (query: string) => {
    console.log('handleOnChange')
    onChange(query);
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
          { searchedFilms && searchedFilms.map(film => (
            <FilmCard key={film.id} detail={film} />
          )) }
        </div>

        <Dialog
          isOpen={isFilmDetailOpen}
        >
          <FilmCard
            detail={filmDetails}
          />
        </Dialog>
      </main>

      <footer>
        by Rowaxl
      </footer>
    </div>
  )
}

export default IndexPageLayout;
