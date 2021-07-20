import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  theme: state.global.theme,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
