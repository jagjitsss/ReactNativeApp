import React from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';
import styles from './styles';
import {  categories, } from '../../data/dataArrays';
export default class Categories extends React.Component {

  renderCategory = ({ item, index}) => (
    <TouchableOpacity  underlayColor='rgba(73,182,77,0.9)' >
      <View style={styles.CategoryContainer} key={item}>
        {index ==0 ? 
          <Text  style={[styles.title, { backgroundColor: '#FFCC4E',   borderRadius: 20,
        overflow: 'hidden' }]}>  Most Popular</Text>
        : <Text style={styles.title}>{item.title}</Text>
        } 
      </View>
    </TouchableOpacity >
  );

  render() {
    return (
     
         <FlatList
              horizontal
              numColumns={1}
              data={categories}
              renderItem={this.renderCategory}
              keyExtractor={item => `${item.title}`}
              showsVerticalScrollIndicator ={false}
              showsHorizontalScrollIndicator={false}
          />
    );
  }
}

