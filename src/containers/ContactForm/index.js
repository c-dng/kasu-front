import { connect } from 'react-redux';

import ContactForm from 'src/components/ContactForm';
import {
  changeEmail, changeObject, changeContent, submitForm, eraseMessage,
} from '../../actions/global';

const mapStateToProps = (state, ownProps) => ({

  email: state.global.email,
  object: state.global.object,
  content: state.global.content,
  message: state.global.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },

  changeObject: function (object) {
    dispatch(changeObject(object));
  },

  changeContent: function (content) {
    dispatch(changeContent(content));
  },

  handleMessage: function () {
    dispatch(submitForm());
  },

  onContactFormUnmount: () => {
    dispatch(eraseMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
