import { connect } from 'react-redux';

import ContactForm from 'src/components/ContactForm';
import {
  changeEmail, changeObject, changeMessage
} from '../../actions/global';

const mapStateToProps = (state, ownProps) => ({

  email: state.global.email,
  object: state.global.object,
  message: state.global.message

});

const mapDispatchToProps = (dispatch, ownProps) => ({

  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },

  changeObject: function (object) {
    dispatch(changeObject(object));
  },

  changeMessage: function (message) {
    dispatch(changeMessage(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
