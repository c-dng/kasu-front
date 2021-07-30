import { connect } from 'react-redux';
import { addToMyCollection } from '../../actions/manga';
import { searchByMangaName, setMangaSearch } from '../../actions/search';
import ManageMyCollection from '../../components/ManageMyCollection';

const mapStateToProps = (state, ownProps) => ({
  mangaSearch: state.search.mangaSearch,
  loading: state.global.loading,
  mangaSearchData: state.search.mangaSearchData,
  mangaFilteredDatabase: state.search.mangaSearchData,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageMyCollection);
