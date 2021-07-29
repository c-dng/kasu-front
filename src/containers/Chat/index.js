import { connect } from 'react-redux';

import Chat from 'src/components/Chat';

const mapStateToprops = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToprops, mapDispatchToProps)(Chat);
