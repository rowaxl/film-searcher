export interface FilmDetail {
  id: string
  name: string
  posterPath: string
  overview: string
  popularity: string
  votesAvg: number
  votesCount: number
  isFaved?: boolean
}

export interface SearchFilmResponse {
  results: FilmDetail[]
}

export interface FavedFilm {
  id: string
  updated: number
}
