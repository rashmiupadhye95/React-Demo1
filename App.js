import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Product from './components/Product';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Welcome to MyApp</Text>
        <Product/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderRadius: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom:250
  },
  h1: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#008F68'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
