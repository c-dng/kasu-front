import { SAVE_MANGA_DATABASE, SET_AVAILABLE_VOLUMES, SET_AVAILABLE_VOLUMES_TO_ZERO } from '../actions/manga';
import { LOGOUT_USER } from '../actions/user';

export const initialState = {
  mangaDatabase: {},
  availableVolumes: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MANGA_DATABASE:
      return {
        ...state,
        mangaDatabase: action.database,
      };
    case LOGOUT_USER:
      return {
        mangaDatabase: {},
        availableVolumes: [],
      };
    case SET_AVAILABLE_VOLUMES:
      return {
        availableVolumes: [...state.availableVolumes, action.availableVolume],
      };
    case SET_AVAILABLE_VOLUMES_TO_ZERO:
      return {
        availableVolumes: [],
      };

    default:
      return state;
  }
};

export default reducer;
