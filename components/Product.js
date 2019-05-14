import React, {Component} from 'react';
import {View} from 'react-native';
import Description from './Description';
import ProductImage from './ProductImage';
import ProductButton from './ProductButton';

export default class Product extends Component {
  render() {
    return (
        <View>
            <ProductImage/>
            <Description/>
            <ProductButton/>
        </View>
        
    );
  }
}