import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Description extends Component {
  render() {
    return (
        
        <Text style={styles.p}>The Samsung Galaxy Note 3 smartphone comes with a 5.7 inch Super AMOLED capacitive touchscreen, 16M colors and has a 1080 x 1920 pixels resolution with 386 ppi pixel density. It comes with an inbuilt S stylus pen. The Samsung Galaxy Note 3 has 3 GB of RAM, 32/64 GB internal memory expandable via microSD card slot.</Text>
        
    );
  }
}

const styles = StyleSheet.create({
    p: {
      fontSize: 15,
      textAlign: 'center',
      margin: 10,
      color: '#008F68'
    }
  });
