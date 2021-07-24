import { connect } from 'react-redux';
import ChatField from 'src/components/Chat/ChatField';
import { changeFieldValue } from '../../actions/chat';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  console.log('name: ', ownProps.name);

  // Ici on accède dynamiquement à la propriété de l'objet
  // state dont le nom est contenu dans la variable name ownProps.name
  console.log('state.le nom de la prop name', state[ownProps.name]);

  return {
    value: state[ownProps.name],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  manageChatFieldChange: (value) => {
    // Ici encore, on peut s'apppuyer sur nos propriétés de configuration
    // (nos ownProps) pour déterminer la propriété du state à modifer.
    console.log(`je veux changer la valeur du champ ${ownProps.name} avec la valeur '${value}'`);
    dispatch(changeFieldValue(ownProps.name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatField);
