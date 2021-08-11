import { connect } from 'react-redux';
import MangaAvailability from '../../components/ManageMyCollection/MyCollectionResult/MangaAvailability';

const mapStateToProps = (state) => ({
  availableVolumes: state.manga.availableVolumes,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaAvailability);
