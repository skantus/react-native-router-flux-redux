import { connect } from 'react-redux';
import { Home } from '../../components/home/home';

const mapStateToProps = ({ routes }) => ({ routes });
export default connect(mapStateToProps)(Home);
