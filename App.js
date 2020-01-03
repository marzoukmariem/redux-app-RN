
import React, { Component } from 'react';
import { StyleSheet, Text, View,Button,BackHandler } from 'react-native';
import { createStore ,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import counterReducer1 from './src/reducers/greenreducer';
import counterReducer2 from './src/reducers/redreducer';
import green from './src/components/greenScreen';
import red from './src/components/redScreen';


// combinereducers
const reducer = combineReducers({
  countergreen: counterReducer1,
  counterred: counterReducer2
})


//create store
const store = createStore(reducer)

export default class App extends React.Component {
 
  render() {
    return (<Provider store={store}><AppContainer /></Provider>);
  }


  //disable back button 
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  }
  
  onBackButtonPressed() {
    return true;
  }


}

//navigation bar config
const AppNavigator = createStackNavigator({
  green: { screen: green },
  red: { screen: red ,
    navigationOptions:  {
      title: 'RED',
      headerLeft:  () =>null,
      gestureEnabled: false,
}
  
  },
});

const AppContainer = createAppContainer(AppNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


