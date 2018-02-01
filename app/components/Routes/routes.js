import React, {Component} from 'react';
import { styles } from './routes.css';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import { configureStore } from '../../store/store';

import Home from '../../components/Home/home';
import Search from '../../components/Search/search';
import Counter from '../../components/Counter/counter';

const store = configureStore();
const RouterRedux = connect()(Router);

export class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux navigationBarStyle={styles.navBar} tintColor='#ffffff' titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home"/>
            <Scene key="search" component={Search} title="Search"/>
            <Scene key="counter" component={Counter} title="Counter"/>
          </Scene>
        </RouterRedux>
      </ Provider>
    );
  }
}
