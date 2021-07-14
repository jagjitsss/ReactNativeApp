import React from 'react';
import { FlatList, TouchableOpacity,  ScrollView, SafeAreaView, Text, View, Image  } from 'react-native';
import { ListItem  } from 'react-native-elements';
import styles from './styles';



export default class UserMenuV2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        menu: [
          {
            "name": "Orders",
            "route": "UserOrders",
            "image": require('../../../../assets/icons/OrderProfile.png'),
            "isActive":true
          },
          {
            "name": "Profile",
            "route": "EditProfile",
            "image": require('../../../../assets/icons/UserProfile.png'),
            "isActive":false
          },
          {
            "name": "Favorites",
            "route": "Favourites",
            "image": require('../../../../assets/icons/heart.png'),
            "isActive":false
          },
          {
            "name": "Offers",
            "route": "Offers",
            "image": require('../../../../assets/icons/offer.png'),
            "isActive":false
          },
          {
            "name": "Payments",
            "route": "Payments-method",
            "image": require('../../../../assets/icons/card_.png'),
            "isActive":false
          },
          {
            "name": "Location",
            "route": "Select-Location",
            "image": require('../../../../assets/icons/location.png'),
            "isActive":false
          }
        ],
      }
    
    
    
  }



  rendermenu= ({ item, index }) => (
    
    <TouchableOpacity onPress = {()=> this.props.navigation.navigate(item.route)}>
        <ListItem >
            <View style={styles.colum}>
                <View style={item.isActive ? styles.imagePicIsActive : styles.imagePicInActive}>
                    <Image source={item.image} style={styles.photo} />
                </View>  
                <Text style={[styles.text]}  numberOfLines={1}>{item.name}</Text>
            </View>
         
        </ListItem>
    </TouchableOpacity>


  );


 
  render() {

    return (
      <SafeAreaView >
        <ScrollView  style={{marginBottom:50}} >
        <View>
        <View style={{justifyContent: 'center',alignItems: 'center',marginTop:40}}>
             
                <Image source={require('../../../../assets/icons/Avatars2.png')} style={styles.photo_pic} /> 
            <Text style={styles.smalltext}>ArtTemplate11</Text>
          </View>
        
         </View> 
          <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={3}
                data={this.state.menu}
                renderItem={this.rendermenu}
                keyExtractor={item => `${item.name}`}
            />
        </ScrollView>
        <View >
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Order-Detail')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>SIGNOUT </Text>
                </View>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

