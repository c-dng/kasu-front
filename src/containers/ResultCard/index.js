import { connect } from 'react-redux';
import ResultCard from '../../components/SearchResultsByLocation/ResultCard';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);
