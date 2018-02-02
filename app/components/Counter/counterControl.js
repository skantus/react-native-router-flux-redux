import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { styles } from './styles';

export class CounterControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.marginBox}>
        <Button transparent
                onPress={this.props.clicked}
                color="rgb(116, 70, 195)">
          <Text>{this.props.label}</Text>
          <Icon name={this.props.icon} />
        </Button>
      </View>
    );
  }

}
