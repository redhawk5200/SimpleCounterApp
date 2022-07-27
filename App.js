//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';

import styles from './styles';
import Counter from './counter';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
  number: 0
}

const rootReducer = (state=initialState, action) =>{
  switch(action.type){
    case 'INCREASE_COUNTER':
      return{number: state.number+1}
    case 'DECREASE_COUNTER':
      return{number: state.number-1}
  }
  return state
}

const store = createStore(rootReducer);

export default function App(){  

  return (
    <Provider store={store}>
      <Counter/>  
    </Provider>
  );
}
