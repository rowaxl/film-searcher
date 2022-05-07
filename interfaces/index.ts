export interface FilmDetail {
  id: number
  title: string
  original_title: string
  poster_path: string
  backdrop_path: string
  overview: string
  popularity: string
  release_date: string
  vote_average: number
  vote_count: number
  isFaved?: boolean
}

export interface SearchFilmResponse {
  results?: FilmDetail[]
  errors: string[]
}

export interface FavedFilm {
  id: string
  updated: number
}
