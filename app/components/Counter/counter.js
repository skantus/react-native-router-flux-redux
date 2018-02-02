import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from './styles';

import { CounterControl } from './counterControl';
import { CounterOutput } from './counterOutput';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showCounter : false }
  }

  testSetState() {
    this.setState({ showCounter: true });
  }

  render() {
    return (
      <View style={styles.container}>

        <Button title="Show text" onPress={this.testSetState.bind(this)}></Button>

        {this.state.showCounter ? <Text>Test text</Text> : null }

        <CounterControl label="Increment" clicked={this.props.onIncrement} icon="ios-add"/>
        <CounterOutput value={this.props.count}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrement} icon="ios-remove"/>

      </View>
    );
  }
}
