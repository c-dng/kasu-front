import { connect } from 'react-redux';
import {
  addToMyCollection, modifyVolumeAvailability, addOrRemoveVolumes, deleteManga,
} from '../../actions/manga';
import { searchByMangaName, setMangaSearch } from '../../actions/search';
import ManageMyCollection from '../../components/ManageMyCollection';

const mapStateToProps = (state) => ({
  mangaSearch: state.search.mangaSearch,
  loading: state.global.loading,
  mangaSearchData: state.search.mangaSearchData,
  mangaFilteredDatabase: state.search.mangaSearchData,
  userMangas: state.user.fullData.contact.manga,
});

const mapDispatchToProps = (dispatch) => ({
  setMangaSearch: function (search) {
    dispatch(setMangaSearch(search));
  },
  manageSubmit: function (search) {
    dispatch(searchByMangaName(search));
  },
  addToMyCollection: function (mangaTitle, volumes) {
    dispatch(addToMyCollection(mangaTitle, volumes));
  },
  modifyVolumeAvailability: function (mangaId, volumeAvailability) {
    dispatch(modifyVolumeAvailability(mangaId, volumeAvailability));
  },
  addOrRemoveVolumes: function (mangaId, volumePossessed) {
    dispatch(addOrRemoveVolumes(mangaId, volumePossessed));
  },
  deleteManga: function (mangaId, volumePossessed) {
    dispatch(deleteManga(mangaId, volumePossessed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageMyCollection);
