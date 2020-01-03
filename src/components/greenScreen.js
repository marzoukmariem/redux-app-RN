import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { connect } from 'react-redux'
import { createStore } from 'redux'
// the first screen 
 class greenScreen extends Component {

    // function allows to navigate to the red screen and increase the number of launching red screen
     pressfunction() {
        
        this.props.navigation.navigate('red');
        this.props.increaseCounter();
           
 }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#b0f2b6' }}>
       
          <Button
          title="Go to Red Screen"
          onPress={() => this.pressfunction()}
/>
<Text style={{color: 'white',fontWeight: 'bold',fontSize: 20}}>{this.props.numgreen}</Text>
      </View>
    )
  }


  
}



function mapStateToProps(state) {
    return {
        numgreen: state.countergreen.numgreen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER_RED' }),
       
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(greenScreen)
