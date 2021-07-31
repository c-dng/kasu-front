import { connect } from 'react-redux';
import { setAvailableVolumes, setAvailableVolumesToZero } from '../../actions/manga';
import MangaAvailability from '../../components/ManageMyCollection/MyCollectionResult/MangaAvailability';

const mapStateToProps = (state, ownProps) => ({
  availableVolumes: state.manga.availableVolumes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAvailableVolumes: function (availableVolume) {
    dispatch(setAvailableVolumes(availableVolume));
  },
  setAvailableVolumesToZero: function () {
    dispatch(setAvailableVolumesToZero());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaAvailability);
