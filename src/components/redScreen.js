import React, { Component } from 'react';
import { Button, View, Text ,BackHandler} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { connect } from 'react-redux'
import { createStore } from 'redux'
 class redScreen extends Component {
    pressfunction() {
        
        this.props.navigation.navigate('green');
        this.props.increaseCountergreen();
               
 }



  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#FF0000'}}>
               <Button
          title="Go to Green Screen"
          onPress={() => this.pressfunction()}
/>
     <Text style={{color: 'white',fontWeight: 'bold',fontSize: 20}}>{this.props.numred}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
    return {
        numred: state.counterred.numred
    }
}

function mapDispatchToProps(dispatch) {
    return {
      
        increaseCountergreen: () => dispatch({ type: 'INCREASE_COUNTER_GREEN' }),
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(redScreen)
