import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';
import { styles } from './counter.css';

import { CounterControl } from './counterControl';
import { CounterOutput } from './counterOutput';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export class Counter extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <CounterControl label="Increment" clicked={this.props.onIncrement} icon="ios-add"/>
        <CounterOutput value={this.props.count}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrement} icon="ios-remove"/>
        <Button onPress={Actions.pop} title="Back"></Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counterReducer.counter,
  routes: state.routes
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: 'INCREMENT' }),
  onDecrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
