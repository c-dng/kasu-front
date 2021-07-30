export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = (search) => ({
  type: SET_SEARCH,
  search,
});

export const SEARCH_BY_ZIPCODE = 'SEARCH_BY_ZIPCODE';

export const searchByZipCode = (zipcode) => ({
  type: SEARCH_BY_ZIPCODE,
  zipcode,
});

export const SAVE_SEARCH_RESULTS = 'SAVE_SEARCH_RESULTS';

export const saveSearchResult = (searchData) => ({
  type: SAVE_SEARCH_RESULTS,
  searchData,
});

export const SET_MANGA_SEARCH = 'SET_MANGA_SEARCH';

export const setMangaSearch = (mangaSearch) => ({
  type: SET_MANGA_SEARCH,
  mangaSearch,
});

export const SAVE_MANGA_SEARCH = 'SAVE_MANGA_SEARCH';

export const saveMangaSearch = (mangaData) => ({
  type: SAVE_MANGA_SEARCH,
  mangaData,
});

export const SEARCH_BY_MANGA_NAME = 'SEARCH_BY_MANGA_NAME';

export const searchByMangaName = (mangaName) => ({
  type: SEARCH_BY_MANGA_NAME,
  mangaName,
});
