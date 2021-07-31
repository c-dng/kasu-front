/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import { loadOtherUserFullData } from '../../actions/user';
import SearchResultsByLocation from '../../components/SearchResultsByLocation';

const mapStateToProps = (state, ownProps) => ({
  users: state.search.searchData,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLoadUser: function (id) {
    dispatch(loadOtherUserFullData(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsByLocation);
