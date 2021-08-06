import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';
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
    dispatch(searchByZipCode(search));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
