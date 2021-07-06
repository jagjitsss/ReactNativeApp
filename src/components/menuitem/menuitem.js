import React from 'react';
import { FlatList, TouchableOpacity , Text, View, Image } from 'react-native';
import styles from './styles';
import { Restaurant } from '../../data/dataArrays';

export default class MenuItem extends React.Component {

  constructor(props) {
    super(props);
  }

  onPressOrder = item => {
    this.props.navigation.navigate('Product-Detail', { item });
  };

  renderRestaurants = ({ item, index }) => (
    <TouchableOpacity  underlayColor='rgba(73,182,77,0.9)'   onPress={() => this.onPressOrder(item)}>
      <View style={styles.container} key={index}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}  numberOfLines={1}>{item.title}</Text>
        <Text style={styles.category}> $20.00</Text>
        {index ==0 ?
                  <Text  style={[styles.category, {position:"absolute", right:0, bottom:12, color:"#00", textAlign:"center", paddingLeft:5,paddingRight:5, borderRadius:8,  backgroundColor: '#FFCC4E', alignSelf: 'flex-start'}]}>3</Text>
          :<Text/> 
        }
      </View>
    </TouchableOpacity >
  );



  render() {
    return (
      <FlatList
          vertical
          itemDimension={90}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Restaurant}
          renderItem={this.renderRestaurants}
          keyExtractor={item => `${item.recipeId}`}
      />

    );
  }
}

