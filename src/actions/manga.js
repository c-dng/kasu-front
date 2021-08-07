// Load the entire manga database from the api
export const LOAD_MANGA_DATABASE = 'LOAD_MANGA_DATABASE';

export const loadMangaDatabase = () => ({
  type: LOAD_MANGA_DATABASE,
});

// Save the entire manga database from the api in the state
export const SAVE_MANGA_DATABASE = 'SAVE_MANGA_DATABASE';

export const saveMangaDatabase = (database) => ({
  type: SAVE_MANGA_DATABASE,
  database,
});

// adds the desired manga with its associated volumes in the user's collection.
export const ADD_TO_MY_COLLECTION = 'ADD_TO_MY_COLLECTION';

export const addToMyCollection = (mangaTitle, volumes) => ({
  type: ADD_TO_MY_COLLECTION,
  mangaTitle,
  volumes,
});

// api call to modify volumes' availability
export const MODIFY_VOLUME_AVAILABILITY = 'MODIFY_VOLUME_AVAILABILITY';

export const modifyVolumeAvailability = (mangaId, volumeAvailability) => ({
  type: MODIFY_VOLUME_AVAILABILITY,
  mangaId,
  volumeAvailability,
});

// api call to add or remove volumes from a possessed manga
export const ADD_OR_REMOVE_VOLUMES = 'ADD_OR_REMOVE_VOLUMES';

export const addOrRemoveVolumes = (mangaId, volumePossessed) => ({
  type: ADD_OR_REMOVE_VOLUMES,
  mangaId,
  volumePossessed,
});

// api call to delete a possessed manga (with its associate volumes)
export const DELETE_MANGA = 'DELETE_MANGA';

export const deleteManga = (mangaId) => ({
  type: DELETE_MANGA,
  mangaId,
});
