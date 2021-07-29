import { connect } from 'react-redux';
import { searchByZipCode, setSearch } from '../../actions/search';
import SearchBar from '../../components/SearchBar';

const mapStateToProps = (state, ownProps) => ({
  search: state.search.search,
  loading: state.global.loading,
  searchResults: state.search.searchData,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSearch: function (search) {
    dispatch(setSearch(search));
  },
  manageSubmit: function (search) {
    console.log(search);
    dispatch(searchByZipCode(search));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
