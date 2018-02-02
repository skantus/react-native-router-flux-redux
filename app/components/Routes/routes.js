import React, {Component} from 'react';
import { styles } from './styles';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import { configureStore } from '../../store/store';

import homeContainer from '../../containers/home/homeContainer';
import searchContainer from '../../containers/search/searchContainer';
import CounterContainer from '../../containers/counter/counterContainer';

const store = configureStore();
const RouterRedux = connect()(Router);

export class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux navigationBarStyle={styles.navBar} tintColor='#ffffff' titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="home" component={homeContainer} title="Home" initial={true}/>
            <Scene key="search" component={searchContainer} title="Search"/>
            <Scene key="counter" component={CounterContainer} title="Counter"/>
          </Scene>
        </RouterRedux>
      </ Provider>
    );
  }
}
