import React from 'react';
import { FlatList,  TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {  promo } from '../../data/dataArrays';
const star = <Icon name="star" size={20} color="#6B6B6B"  />;

export default class Offers extends React.Component {

 
  constructor(props) {
    super(props);
  
  }

  
  renderOffers = ({ item, index }) => (
      <TouchableOpacity style={{marginTop:20}}  >
            <View style={styles.container}>
            <Image source={require('../../../assets/icons/coupon.png')} style={styles.photo} />
            <View>
                <Text style={styles.textb}>Sale off 30%</Text>
                <Text style={styles.text}>7 Days Left</Text>
            </View>
            <Text style={styles.copyText}>Copy</Text>
            </View>
        </TouchableOpacity >
  );



  render() {

    return (

      <SafeAreaView>
        <ScrollView>
          <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Offers</Text>
           <FlatList
              vertical
              itemDimension={90}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={promo}
              renderItem={this.renderOffers}
              keyExtractor={item => `${item.id}`}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

