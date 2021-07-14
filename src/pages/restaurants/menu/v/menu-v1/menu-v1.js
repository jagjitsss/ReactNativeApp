import React from 'react';
import { ImageBackground ,  ScrollView, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Categories from '../../../../../components/categories/categories';
import MenuItem from '../../../../../components/menuitem/menuitem';
import ViewCart from '../../../../../components/viewCart/viewCart';
import BackButton from '../../../../../components/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
const star = <Icon name="star" size={20} color="#6B6B6B"  />;
const image = { uri: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" };

export default class RestaurantMenu1 extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    return (

      <SafeAreaView >
        <ScrollView  style={{marginBottom:90}} >
              <ImageBackground source={null} style={{height:260, borderBottomColor:"#EAEBEF", borderBottomWidth:1}}>
                  <BackButton  backIcon={true}  onPress={() => {this.props.navigation.goBack();}}/>
                  <View style={styles.row_}>
                    <Image source={require('../../../../../../assets/icons/headerRestaurantBasic.png')} style={styles.img_} />
                    <TouchableOpacity  onPress = {()=> this.props.navigation.navigate('Favourites')}>
                        <Image source={require('../../../../../../assets/icons/IconsBasicLike.png')} style={[styles.img_, {  marginTop:24}]} />
                    </TouchableOpacity>   
                  </View>  
                  <Text style={styles.text}>Smile Houes Cafe</Text>
                  <View style={styles.row}>
                    <Text style={styles.button_}>{star} 4.8&nbsp;&nbsp;&nbsp; 415 Reviews</Text>
                    <Text style={styles.button_}>15 - 20 mins</Text>
                    <Text style={styles.button_}>Delivery - $8.90</Text>
                  </View> 
              </ImageBackground>
                <Categories />
                <MenuItem  navigation={this.props.navigation}/>
          </ScrollView>
           <ViewCart/>
      </SafeAreaView>
    );
  }
}

