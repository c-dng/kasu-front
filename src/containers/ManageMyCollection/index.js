import { connect } from 'react-redux';
import { addToMyCollection, modifyVolumeAvailability } from '../../actions/manga';
import { searchByMangaName, setMangaSearch } from '../../actions/search';
import ManageMyCollection from '../../components/ManageMyCollection';

const mapStateToProps = (state, ownProps) => ({
  mangaSearch: state.search.mangaSearch,
  loading: state.global.loading,
  mangaSearchData: state.search.mangaSearchData,
  mangaFilteredDatabase: state.search.mangaSearchData,
  userMangas: state.user.fullData.contact.manga,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setMangaSearch: function (search) {
    dispatch(setMangaSearch(search));
  },
  manageSubmit: function (search) {
    console.log(search);
    dispatch(searchByMangaName(search));
  },
  addToMyCollection: function (mangaTitle, volumes) {
    dispatch(addToMyCollection(mangaTitle, volumes));
  },
  modifyVolumeAvailability: function (mangaId, volumeAvailability) {
    dispatch(modifyVolumeAvailability(mangaId, volumeAvailability));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageMyCollection);
