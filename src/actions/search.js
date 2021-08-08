// Controlled component for the zip code searchbar
export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = (search) => ({
  type: SET_SEARCH,
  search,
});

// api call on submit of zipcode search
export const SEARCH_BY_ZIPCODE = 'SEARCH_BY_ZIPCODE';

export const searchByZipCode = (zipcode) => ({
  type: SEARCH_BY_ZIPCODE,
  zipcode,
});

// saving the results of zipcode search to the state
export const SAVE_SEARCH_RESULTS = 'SAVE_SEARCH_RESULTS';

export const saveSearchResult = (searchData) => ({
  type: SAVE_SEARCH_RESULTS,
  searchData,
});

// add-manga searchbar controlled component
export const SET_MANGA_SEARCH = 'SET_MANGA_SEARCH';

export const setMangaSearch = (mangaSearch) => ({
  type: SET_MANGA_SEARCH,
  mangaSearch,
});

// save to the state the result of the manga search in the add-manga searchbar
export const SAVE_MANGA_SEARCH = 'SAVE_MANGA_SEARCH';

export const saveMangaSearch = (mangaData) => ({
  type: SAVE_MANGA_SEARCH,
  mangaData,
});

// api call to load the mangas searched on submit of the add-manga searchbar
export const SEARCH_BY_MANGA_NAME = 'SEARCH_BY_MANGA_NAME';

export const searchByMangaName = (mangaName) => ({
  type: SEARCH_BY_MANGA_NAME,
  mangaName,
});

// api call to load the default carousel data when the user isn't connected
export const LOAD_CAROUSEL_DATA = 'LOAD_CAROUSEL_DATA';

export const loadCarouselData = () => ({
  type: LOAD_CAROUSEL_DATA,
});

// saving the  carousel data loaded in the state
export const SAVE_CAROUSEL_SEARCH = 'SAVE_CAROUSEL_SEARCH';

export const saveCarouselData = (carouselSearchData) => ({
  type: SAVE_CAROUSEL_SEARCH,
  carouselSearchData,
});

// api call to load carousel data related to the users zipcode
export const LOAD_CAROUSEL_DYNAMIC_DATA = 'LOAD_CAROUSEL_DYNAMIC_DATA';

export const loadCarouselDynamicData = (userZipCode) => ({
  type: LOAD_CAROUSEL_DYNAMIC_DATA,
  userZipCode,
});
