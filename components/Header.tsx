import Image from 'next/image';

const PageHeader = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-2 pe-2">
    <p className="h4 text-white me-2">
      Film Searcher

      <span className="ms-2 h6">by</span>
    </p>

    <Image src="/TMDB_logo2-01.png" alt="TMDB_logo" className="tmdb_logo" width={60} height={30} />
  </nav>
)

export default PageHeader;
