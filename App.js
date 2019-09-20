import React, { Component } from 'react';

 import {Provider} from 'react-redux';
 import {store} from './src/redux/store';
import {QRGenerator,SelectionOption,QRScanner} from './src/screen/index';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
  SelectionOption: SelectionOption,
  QRScanner: QRScanner,
  QRGenerator: QRGenerator,
}, {
  initialRouteName: 'SelectionOption'
});

const App = createAppContainer(AppNavigator);

class My extends Component{
  render(){
    return( 
       <Provider store={store}>
          <App/>
      </Provider>)
  }
}

export default My;
