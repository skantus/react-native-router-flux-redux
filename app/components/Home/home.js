import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './home.css';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.marginBox}>
          <Image style={styles.image} source={{ uri: 'http://devstickers.com/assets/img/pro/h8ci.png' }}/>
        </View>
        <View style={styles.marginBox}>
          <Button onPress={Actions.search} title="Go to Search" color="rgb(116, 70, 195)"></Button>
        </View>
        <View style={styles.marginBox}>
          <Icon name="logo-github" size={40}/>
          <Text>@skantus</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ routes }) => ({ routes });
export default connect(mapStateToProps)(Home);
