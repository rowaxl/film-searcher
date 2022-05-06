import { FavedFilm } from "../interfaces";

export class Storage {
  private _storage;

  constructor() {
    if (!localStorage) return;

    this._storage = localStorage;
  }

  public getFavorites(): FavedFilm[] {
    const stored = this._storage?.getItem('favedFilms');

    if (!stored) return [];

    const parsed: Array<FavedFilm> = JSON.parse(stored);

    parsed.sort((a, b) => a.updated - b.updated);

    return parsed;
  }

  public saveFavorites(favorites: FavedFilm[]) {
    this._storage?.setItem('favedFilms', JSON.stringify(favorites));
  }

  public addFavorite(id: string) {
    const storedFavorites = this._storage?.getItem('favedFilms');

    const parsedFavorites: Array<FavedFilm> = typeof storedFavorites === 'string' ? JSON.parse(storedFavorites) : [];

    const updatedFavorites = [...parsedFavorites, { id, updated: Date.now() }];

    this.saveFavorites(updatedFavorites);

    return updatedFavorites;
  }

  public removeFavorite(id: string) {
    const storedFavorites = this._storage?.getItem('favedFilms');

    const parsedFavorites: Array<FavedFilm> = typeof storedFavorites === 'string' ? JSON.parse(storedFavorites) : [];

    const targetIndex = parsedFavorites.findIndex(f => f.id === id);
    
    if (targetIndex < 0) return;

    const updatedFavorites = [...parsedFavorites.slice(0, targetIndex), ...parsedFavorites.slice(targetIndex + 1)];

    this.saveFavorites(updatedFavorites);

    return updatedFavorites;
  }
}