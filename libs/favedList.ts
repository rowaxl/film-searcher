const KEY = 'favedFilms';

export const getFavedList = (): string[] => {
  const storedList = localStorage.getItem(KEY);

  if (!storedList) return [];

  return JSON.parse(storedList);
}

export const saveFavedList = (list: string[]) => {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export const isFavedFilm = (id: string) => {
  const favedFilms = getFavedList();

  return favedFilms.findIndex(filmId => filmId === id) > -1;
}

export const addFavedFilm = (id: string) => {
  const favedFilms = getFavedList();

  const updatedList = [...favedFilms, id];
  saveFavedList(updatedList);

  return updatedList;
}

export const removeFavedFilm = (id: string) => {
  const favedFilms = getFavedList();

  const targetIndex = favedFilms.findIndex(filmId => filmId === id);

  if (targetIndex < 0) return;

  const updatedList = [...favedFilms.slice(0, targetIndex), ...favedFilms.slice(targetIndex + 1)];

  saveFavedList(updatedList);

  return updatedList;
}