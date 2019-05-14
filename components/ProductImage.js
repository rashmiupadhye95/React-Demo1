import React, {Component} from 'react';
import {Image, View,StyleSheet} from 'react-native';

export default class ProductImage extends Component {
  render() {
    return (
        
        <Image source={{uri:'http://www.pngmart.com/files/7/Mobile-Phone-PNG-HD.png'}}
        style={styles.image}></Image>
        
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width:250,
     height: 250
  },
});