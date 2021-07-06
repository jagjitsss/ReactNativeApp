import React from 'react';
import { FlatList, TouchableOpacity,  ScrollView, SafeAreaView, Text, View, Image  } from 'react-native';
import { ListItem  } from 'react-native-elements';
import styles from './styles';



export default class UserMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        menu: [
          {
            "name": "My Orders",
            "route": "MyOrder",
            "image": require('../../../../assets/icons/OrderProfile.png')
          },
          {
            "name": "My Profile",
            "route": "EditProfile",
            "image": require('../../../../assets/icons/UserProfile.png')
          },
          {
            "name": "Favorites",
            "route": "Favourites",
            "image": require('../../../../assets/icons/heart.png')
          },
          {
            "name": "Offers & Promos",
            "route": "Offers",
            "image": require('../../../../assets/icons/offer.png')
          },
          {
            "name": "Payments",
            "route": "Payments-method",
            "image": require('../../../../assets/icons/card_.png')
          },
          {
            "name": "Location",
            "route": "Select-Location",
            "image": require('../../../../assets/icons/location.png')
          }
        ],
      }
    
    
    
  }




  rendermenu= ({ item, index }) => (
    
    <TouchableOpacity onPress = {()=> this.props.navigation.navigate(item.route)}>
        <ListItem bottomDivider>
            <View style={styles.container}>
                <Image source={item.image} style={styles.photo} />
                <Text style={[styles.text,{width:250}]}  numberOfLines={1}>{item.name}</Text>
            </View>
            <ListItem.Chevron />
         
        </ListItem>
    </TouchableOpacity>


  );


 
  render() {

    return (
      <SafeAreaView >
        <ScrollView  style={{marginBottom:50}} >
        <View style={{flexDirection: "row", justifyContent:"flex-start",marginTop:20, marginLeft:20,marginBottom:20}}>
          <Image source={require('../../../../assets/icons/Avatars1.png')} style={styles.icon_} />
          <Text style={styles.smalltext}>ArtTemplate</Text>
         </View> 
          <FlatList
                vertical
                itemDimension={90}
                showsVerticalScrollIndicator={false}
                numColumns={1}
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

