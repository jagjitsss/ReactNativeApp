import React from 'react';
import { ImageBackground,  TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";

import Geolocation from "react-native-geolocation-service";

export default class OrderTracking extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      saveAs:"1",
      latitude: 0,
     longitude: 0,
     coordinates: [
      {
        latitude: 48.8587741,
        longitude: 2.2069771,
      },
      {
        latitude: 48.8323785,
        longitude: 2.3361663,
      },
    ],
  }
  }

  componentDidMount() {

 
  }

  render() {

    return (

      <SafeAreaView>
      <TouchableOpacity  onPress={() => {this.props.navigation.goBack();}} style={styles.btnContainer}>
          <Image source={require('../../../../assets/icons/ArrowblackLeft.png')} style={styles.btnIcon} />
      </TouchableOpacity>
        <ScrollView>
          
          <View style={styles.container2}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
           >
             <Marker coordinate={this.state.coordinates[0]} />
            <Marker coordinate={this.state.coordinates[1]} />
            <Polyline
              coordinates={this.state.coordinates}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={['#7F0000']}
              strokeWidth={6}
            />
        </MapView>
        </View>

            <Text style={styles.textTitle}>Order Tracking   </Text>
            <Text style={styles.extrasmalltext}><Image source={require('../../../../assets/icons/time.png')} style={styles.icon_} />&nbsp;&nbsp;Delivery Time</Text>
            <Text style={styles.smalltext}>15 min - 20 min</Text>
            <Text style={styles.extrasmalltext}><Image source={require('../../../../assets/icons/addressPin.png')} style={styles.icon_} /> &nbsp;&nbsp;Delivery Address</Text>
            <Text style={styles.smalltext}>&nbsp;70 Atlantic St, Stamford</Text>
            <View style={styles.container}>
              <Image source={require('../../../../assets/icons/Avatars.png')} style={styles.photo} /> 
              <View style={{flex:1, justifyContent:"flex-start"}}>
                  <Text style={styles.smalltext1}>Bryan Brendle</Text>
                  <Text style={styles.extrasmalltext1}>Food Courier   </Text>
              </View> 
              <TouchableOpacity >
                <Image source={require('../../../../assets/icons/Button.png')} style={styles.photo} />
              </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

