import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { createNewChat } from '../../actions/chat';
import { loadOtherUserFullData } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  carouselUsers: state.search.carouselSearchData,
});

const mapDispatchToProps = (dispatch) => ({
  handleLoadUser: function (id) {
    dispatch(loadOtherUserFullData(id));
  },
  createNewChat: function (id) {
    dispatch(createNewChat(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
