import { connect } from 'react-redux';
import { Counter } from '../../components/counter/counter';
import { Increment, Decrement } from '../../actions/counter/actions';

const mapStateToProps = state => ({
  count: state.counterReducer.counter,
  routes: state.routes
});

const mapDispatchToProps = {
  onIncrement: Increment,
  onDecrement: Decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
