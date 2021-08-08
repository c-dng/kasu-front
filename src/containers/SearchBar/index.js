import { connect } from 'react-redux';
import { searchByZipCode, setSearch } from '../../actions/search';
import SearchBar from '../../components/SearchBar';

const mapStateToProps = (state) => ({
  search: state.search.search,
  loading: state.global.loading,
  searchResults: state.search.searchData,
});

const mapDispatchToProps = (dispatch) => ({
  setSearch: function (search) {
    dispatch(setSearch(search));
  },
  manageSubmit: function (search) {
    dispatch(searchByZipCode(search));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
