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

export const SET_AVAILABLE_VOLUMES = 'SET_AVAILABLE_VOLUMES';

export const setAvailableVolumes = (availableVolume) => ({
  type: SET_AVAILABLE_VOLUMES,
  availableVolume,
});

export const SET_AVAILABLE_VOLUMES_TO_ZERO = 'SET_AVAILABLE_VOLUMES_TO_ZERO';

export const setAvailableVolumesToZero = () => ({
  type: SET_AVAILABLE_VOLUMES_TO_ZERO,
});

export const MODIFY_VOLUME_AVAILABILITY = 'MODIFY_VOLUME_AVAILABILITY';

export const modifyVolumeAvailability = (mangaId, volumeAvailability) => ({
  type: MODIFY_VOLUME_AVAILABILITY,
  mangaId,
  volumeAvailability,
});

export const ADD_OR_REMOVE_VOLUMES = 'ADD_OR_REMOVE_VOLUMES';

export const addOrRemoveVolumes = (mangaId, volumePossessed) => ({
  type: ADD_OR_REMOVE_VOLUMES,
  mangaId,
  volumePossessed,
});

export const DELETE_MANGA = 'DELETE_MANGA';

export const deleteManga = (mangaId) => ({
  type: DELETE_MANGA,
  mangaId,
});
