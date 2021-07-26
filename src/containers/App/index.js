import { connect } from 'react-redux';

import App from 'src/components/App';
import { autoLoginUser } from '../../actions/user';

const mapStateToProps = (state, ownProps) => ({
  theme: state.global.theme,
  loading: state.global.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  autoLogin: function () {
    dispatch(autoLoginUser());
  },
}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
