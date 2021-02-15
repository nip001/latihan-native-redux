import React, { Component } from 'react'
import { View } from 'react-native';
import Buah from './src/buah/Buah';
import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Buah/>
      </Provider>
    )
  }
}


export default App;
