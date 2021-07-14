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

export default class RestaurantMenu2 extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {


    return (

      <SafeAreaView >
        <ScrollView  style={{marginBottom:90}} >
              <View  style={styles.container}>
                  <BackButton  backIcon={true} style={{margin:0}}  onPress={() => {this.props.navigation.goBack();}}/>
                    <Text style={styles.text}>Smile Houes Cafe</Text>
                    <Image source={require('../../../../../../assets/icons/headerRestaurantBasic.png')} style={styles.img_} />
                 
                  
              </View>
                <Categories />
                <View style={{backgroundColor:"#F6F6F6"}}>
                <MenuItem  navigation={this.props.navigation}/>
                </View>
          </ScrollView>
           <ViewCart/>
      </SafeAreaView>
    );
  }
}

