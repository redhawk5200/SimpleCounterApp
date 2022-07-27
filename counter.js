//to change a data type dynamically you have to import {useState} from react library
import React, {Component, useEffect, useState} from 'react';

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
import { connect } from 'react-redux';


class Counter extends Component{

    
    render(){
        return (
            <View>
                <Text style={styles.text}>{this.props.number}</Text>
                <TouchableOpacity style={styles.button} onPress={this.props.inincreaseCounter}>
                    <Text style={styles.text1}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={this.props.decreaseCounter}>
                    <Text style={styles.text1}>-</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default connect(mapStateToProps)(Counter)

function mapStateToProps(state){
  return{
    number: this.number
  }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter : () => dispatch({type:'INCREASE_NUMBER'}),
        decreaseCounter : () => dispatch({type:'DECREASE_NUMBER'})
    }
}

