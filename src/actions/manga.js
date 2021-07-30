export const LOAD_MANGA_DATABASE = 'LOAD_MANGA_DATABASE';

export const loadMangaDatabase = () => ({
  type: LOAD_MANGA_DATABASE,
});

export const SAVE_MANGA_DATABASE = 'SAVE_MANGA_DATABASE';

export const saveMangaDatabase = (database) => ({
  type: SAVE_MANGA_DATABASE,
  database,
});

export const ADD_TO_MY_COLLECTION = 'ADD_TO_MY_COLLECTION';

export const addToMyCollection = (mangaTitle, volumes) => ({
  type: ADD_TO_MY_COLLECTION,
  mangaTitle,
  volumes,
});
