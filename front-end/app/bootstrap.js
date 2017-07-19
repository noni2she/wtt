
import { bindActionCreators } from 'redux';
import fetchFirebaseData from 'actions/fetchData';

export default ({ dispatch }) => {
  const fetchData = bindActionCreators(fetchFirebaseData, dispatch);
  return () => fetchData();
};
