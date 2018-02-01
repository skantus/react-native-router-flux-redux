import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { styles } from './search.css';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={Actions.pop} title="< Back to Home"></Button>
        <Button onPress={Actions.counter} title="Go to Counter >"></Button>
      </View>
    );
  }
}

const mapStateToProps = ({ routes }) => ({ routes });
export default connect(mapStateToProps)(Search);
