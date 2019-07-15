import React, {Component} from 'react';
import './App.css';
import List1 from './components/List1';
import List2 from './components/List2';
import { Provider } from 'react-redux';
import {store} from './store'

class  App extends Component {

 render() {
   
  return (
    <Provider store={store} >
      <div className="app">
        <List1/>
        <List2/>
      </div>
    </Provider>
  );
 }
}

export default App;
