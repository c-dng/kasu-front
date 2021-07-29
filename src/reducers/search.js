/* eslint-disable linebreak-style */
import { SAVE_SEARCH_RESULTS, SET_SEARCH } from '../actions/search';
import { LOGOUT_USER } from '../actions/user';

export const initialState = {
  search: '',
  searchData: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case SAVE_SEARCH_RESULTS:
      return {
        ...state,
        searchData: action.searchData,
      };
    case LOGOUT_USER:
      return {
        search: '',
        searchData: {},
      };
    default:
      return state;
  }
};

export default reducer;
