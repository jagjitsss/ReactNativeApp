import React from 'react';
import { RadioButton, FlatList,  TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import {  Restaurant } from '../../data/dataArrays';
const star = <Icon name="star" size={12} color="#6B6B6B"  />;
const dot = <OcticonsIcon name="primitive-dot" size={10} color="#6B6B6B"  />;




export default class Favourites extends React.Component {


  constructor(props) {
    super(props);
  
  }
  onPressOrder = item => {
    this.props.navigation.navigate('Product-Detail', { item });
  };

  renderFav = ({ item, index }) => (
      <TouchableOpacity style={{marginTop:20}}    onPress={() => this.onPressOrder(item)}>
            <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
                    <View>
                        <Text style={styles.textb}>
                         {item.title}
                        </Text>
                        <Text style={styles.text}  numberOfLines={3}>
                            {item.description}
                        </Text>
                        <Text style={styles.category}>{star} {item.rating}&nbsp; {dot} &nbsp;15-20 mins &nbsp;{dot}&nbsp; $20</Text>
                    </View>
            </View>
        </TouchableOpacity >
  );



 

  render() {

    return (

      <SafeAreaView>
        <ScrollView>
          <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Favorites</Text>
           <FlatList
              vertical
              itemDimension={90}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={Restaurant}
              renderItem={this.renderFav}
              keyExtractor={item => `${item.recipeId}`}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

