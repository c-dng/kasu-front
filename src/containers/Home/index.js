import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({

  isLogged: state.user.logged,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (_dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
