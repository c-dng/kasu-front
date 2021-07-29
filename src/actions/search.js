/* eslint-disable linebreak-style */
export const SET_SEARCH = 'SET_SEARCH';
// eslint-disable-next-line linebreak-style

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
