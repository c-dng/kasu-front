import { connect } from 'react-redux';
import { createNewChat } from '../../actions/chat';
import { loadOtherUserFullData } from '../../actions/user';
import SearchResultsByLocation from '../../components/SearchResultsByLocation';

const mapStateToProps = (state) => ({
  users: state.search.searchData,
});

const mapDispatchToProps = (dispatch) => ({
  handleLoadUser: function (id) {
    dispatch(loadOtherUserFullData(id));
  },
  createNewChat: function (id) {
    dispatch(createNewChat(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsByLocation);
